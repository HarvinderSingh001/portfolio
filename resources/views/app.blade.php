<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Primary Meta Tags (SEO Optimization) -->
        <meta name="title" content="Harvinder Singh | Full-Stack Developer">
        <meta name="description" content="Portfolio of Harvinder Singh, a Full-Stack Developer specializing in robust Laravel backends, modern React/Livewire frontends, and seamless API integrations.">
        <meta name="keywords" content="Harvinder Singh, Full-Stack Developer, Laravel Developer, React Developer, Node.js, Web Development, PHP, JavaScript, Portfolio, Enterprise Solutions, Software Engineer">
        <meta name="author" content="Harvinder Singh">
        <meta name="robots" content="index, follow">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="Harvinder Singh | Full-Stack Developer">
        <meta property="og:description" content="Portfolio of Harvinder Singh, a Full-Stack Developer specializing in robust Laravel backends, modern React/Livewire frontends, and seamless API integrations.">
        <!-- Make sure to place an actual image at public/og-image.png for this to work -->
        <meta property="og:image" content="{{ asset('/og-image.png') }}">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url()->current() }}">
        <meta property="twitter:title" content="Harvinder Singh | Full-Stack Developer">
        <meta property="twitter:description" content="Portfolio of Harvinder Singh, a Full-Stack Developer specializing in robust Laravel backends, modern React/Livewire frontends, and seamless API integrations.">
        <!-- Make sure to place an actual image at public/twitter-image.png for this to work -->
        <meta property="twitter:image" content="{{ asset('/og-image.png') }}">

        <!-- Canonical URL -->
        <link rel="canonical" href="{{ url()->current() }}" />

        <!-- Google Search Console Verification Placeholder -->
        <!-- Add your verification code here after setting up Search Console: -->
        <!-- <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> -->

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>Harvinder Singh | Full-Stack Developer</title>

        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml">
        <link rel="icon" href="/favicon.ico?v=2" sizes="any">
        <link rel="apple-touch-icon" href="/favicon.svg?v=2">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600&display=swap" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
