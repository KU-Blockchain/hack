import React from 'react';

export function Footer() {
    return (
        <div className="text-center px-6 py-12 relative z-10">
            <p className="text-white/50 text-sm">
                © 2026 Midwest Block-a-thon. All rights reserved.
            </p>
            <a
                className="text-white/50 text-sm underline"
                href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank" rel="noopener noreferrer">
                MLH Code of Conduct
            </a>
        </div>
    )
}