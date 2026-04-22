import os
import json

base_dir = '/var/www/html'

def get_project_info(project_path):
    tech = []
    description = ""
    
    # Check for Laravel / PHP
    if os.path.exists(os.path.join(project_path, 'artisan')):
        tech.append('Laravel')
        tech.append('PHP')
    elif os.path.exists(os.path.join(project_path, 'composer.json')):
        tech.append('PHP')
        try:
            with open(os.path.join(project_path, 'composer.json'), 'r') as f:
                data = json.load(f)
                desc = data.get('description', '')
                if desc:
                    description = desc
        except:
            pass

    # Check for Node / Frontend
    if os.path.exists(os.path.join(project_path, 'package.json')):
        tech.append('Node.js')
        try:
            with open(os.path.join(project_path, 'package.json'), 'r') as f:
                data = json.load(f)
                desc = data.get('description', '')
                if desc and not description:
                    description = desc
                
                deps = data.get('dependencies', {})
                dev_deps = data.get('devDependencies', {})
                all_deps = {**deps, **dev_deps}
                
                if 'react' in all_deps: tech.append('React')
                if 'eslint-plugin-vue' in all_deps or 'vue' in all_deps: tech.append('Vue.js')
                if 'next' in all_deps: tech.append('Next.js')
                if 'express' in all_deps: tech.append('Express')
                if 'tailwindcss' in all_deps: tech.append('TailwindCSS')
        except:
            pass
            
    # Python
    if os.path.exists(os.path.join(project_path, 'requirements.txt')) or os.path.exists(os.path.join(project_path, 'fastapi')):
        tech.append('Python')
    
    # Java
    if os.path.exists(os.path.join(project_path, 'pom.xml')):
        tech.append('Java')
        tech.append('Maven')
        
    return description, list(set(tech))

projects = []
for item in sorted(os.listdir(base_dir)):
    full_path = os.path.join(base_dir, item)
    if os.path.isdir(full_path) and not item.startswith('.') and item not in ['node_modules', 'vendor']:
        desc, tech = get_project_info(full_path)
        if tech or desc or os.listdir(full_path):
            if "Satprep" in item:
                desc = "Educational platform designed to assist students in preparing for SAT exams with comprehensive resources."
            if "Teeqode" in item:
                desc = "E-commerce or enterprise platform building custom digital solutions and software products."
            
            projects.append({
                'name': item,
                'desc': desc if desc else "A web development project.",
                'tech': ", ".join(tech) if tech else "HTML/CSS/JS"
            })

result = ""
for p in projects:
    result += f"{p['name']}\n{p['desc']}\nTechnologies Used: {p['tech']}\n\n"

with open('/var/www/html/portfolio/projects_summary.md', 'w') as f:
    f.write(result.strip())

print("Done")
