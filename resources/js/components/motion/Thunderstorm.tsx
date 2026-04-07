import React, { useEffect, useRef, memo } from 'react';

// ─── Lightning Tree Builder ───────────────────────────────────────────────────
interface Point { x: number; y: number; }
interface Branch { points: Point[]; width: number; alpha: number; }

function buildTree(
    ax: number, ay: number,
    bx: number, by: number,
    roughness: number,
    width: number,
    depth: number,
    result: Branch[]
) {
    // Collect the polyline points for this branch via mid-point displacement
    const points: Point[] = [{ x: ax, y: ay }];
    let pts = [{ x: ax, y: ay }, { x: bx, y: by }];

    for (let d = 0; d < 5; d++) {
        const next: Point[] = [];
        for (let i = 0; i < pts.length - 1; i++) {
            const p = pts[i];
            const q = pts[i + 1];
            const mx = (p.x + q.x) / 2 + (Math.random() - 0.5) * roughness;
            const my = (p.y + q.y) / 2 + (Math.random() - 0.5) * roughness * 0.1;
            next.push(p, { x: mx, y: my });
        }
        next.push(pts[pts.length - 1]);
        pts = next;
        roughness *= 0.55;
    }

    result.push({ points: pts, width, alpha: 1 });

    // Spawn branches if deep enough
    if (depth > 0) {
        const totalLen = pts.length;
        const numBranches = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < numBranches; i++) {
            const idx = Math.floor(totalLen * (0.25 + Math.random() * 0.55));
            const origin = pts[Math.min(idx, totalLen - 1)];
            const angle = (Math.random() - 0.3) * 1.5; // bias slightly right
            const len = (Math.hypot(bx - ax, by - ay)) * (0.3 + Math.random() * 0.4);
            const ex = origin.x + Math.sin(angle) * len * 0.4;
            const ey = origin.y + Math.cos(angle) * len;
            buildTree(
                origin.x, origin.y, ex, ey,
                roughness * 3, width * 0.5, depth - 1, result
            );
        }
    }
}

// ─── Render All Branches ─────────────────────────────────────────────────────
function renderTree(ctx: CanvasRenderingContext2D, branches: Branch[], masterAlpha: number) {
    for (const branch of branches) {
        if (branch.points.length < 2) continue;

        const a = branch.alpha * masterAlpha;

        // Outer plasma glow
        ctx.beginPath();
        ctx.moveTo(branch.points[0].x, branch.points[0].y);
        for (let i = 1; i < branch.points.length; i++) {
            ctx.lineTo(branch.points[i].x, branch.points[i].y);
        }
        ctx.lineWidth = branch.width * 10;
        ctx.strokeStyle = `rgba(0, 180, 255, ${a * 0.12})`;
        ctx.shadowColor = '#00c8ff';
        ctx.shadowBlur = 80;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.stroke();

        // Mid blue-white glow
        ctx.beginPath();
        ctx.moveTo(branch.points[0].x, branch.points[0].y);
        for (let i = 1; i < branch.points.length; i++) {
            ctx.lineTo(branch.points[i].x, branch.points[i].y);
        }
        ctx.lineWidth = branch.width * 4;
        ctx.strokeStyle = `rgba(160, 220, 255, ${a * 0.55})`;
        ctx.shadowColor = '#80d4ff';
        ctx.shadowBlur = 40;
        ctx.stroke();

        // Bright white core
        ctx.beginPath();
        ctx.moveTo(branch.points[0].x, branch.points[0].y);
        for (let i = 1; i < branch.points.length; i++) {
            ctx.lineTo(branch.points[i].x, branch.points[i].y);
        }
        ctx.lineWidth = branch.width;
        ctx.strokeStyle = `rgba(255, 255, 255, ${a})`;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 20;
        ctx.stroke();
    }
}

// ─── Main Component ───────────────────────────────────────────────────────────
export const Thunderstorm = memo(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        const resize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        let raf: number;
        let timer: ReturnType<typeof setTimeout>;

        const strike = () => {
            const W = canvas.width;
            const H = canvas.height;

            // ── Generate bolt confined to the RIGHT side ──
            const sx = W * (0.58 + Math.random() * 0.35);
            const ex = sx + (Math.random() - 0.5) * W * 0.12;
            const ey = H * (0.5  + Math.random() * 0.45);

            const branches: Branch[] = [];
            buildTree(sx, 0, ex, ey, W * 0.09, 4, 3, branches);

            // ── Real-lightning flash sequence (ms durations) ──
            // Strike 1 (primary) → short blackout → Re-strike → fade
            const seq: { boltA: number; skyA: number; ms: number }[] = [
                { boltA: 1.0,  skyA: 0.30, ms: 60  },   // Initial full flash
                { boltA: 0.0,  skyA: 0.05, ms: 50  },   // Brief blackout
                { boltA: 0.9,  skyA: 0.22, ms: 80  },   // Re-strike (slightly dimmer)
                { boltA: 0.0,  skyA: 0.03, ms: 35  },   // Blackout
                { boltA: 0.55, skyA: 0.12, ms: 60  },   // 3rd weak pulse
                { boltA: 0.0,  skyA: 0.0,  ms: 400 },   // Done — clear canvas
            ];

            let step = 0;
            let stepStart = performance.now();

            const loop = (now: number) => {
                if (step >= seq.length) {
                    ctx.clearRect(0, 0, W, H);
                    timer = setTimeout(strike, 1800 + Math.random() * 3200);
                    return;
                }

                const s = seq[step];
                if (now - stepStart >= s.ms) {
                    step++;
                    stepStart = now;
                }

                ctx.clearRect(0, 0, W, H);

                // Sky illumination — radial from bolt origin
                if (s.skyA > 0) {
                    const grad = ctx.createRadialGradient(sx, 0, 0, sx, H * 0.15, W * 0.75);
                    grad.addColorStop(0,   `rgba(200, 230, 255, ${s.skyA})`);
                    grad.addColorStop(0.4, `rgba(80,  160, 220, ${s.skyA * 0.35})`);
                    grad.addColorStop(1,   'rgba(0,0,0,0)');
                    ctx.fillStyle = grad;
                    ctx.fillRect(0, 0, W, H);
                }

                if (s.boltA > 0) {
                    ctx.save();
                    renderTree(ctx, branches, s.boltA);
                    ctx.restore();
                }

                raf = requestAnimationFrame(loop);
            };

            raf = requestAnimationFrame(loop);
        };

        timer = setTimeout(strike, 800);

        return () => {
            window.removeEventListener('resize', resize);
            clearTimeout(timer);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%', height: '100%',
                pointerEvents: 'none',
                zIndex: 99999,
            }}
        />
    );
});
