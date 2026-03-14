import React from 'react';

export function MLHTrustBadge() {
    return (
        <a
            id="mlh-trust-badge"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-4 md:right-24 top-0 z-[10000] block transition-transform duration-200 hover:translate-y-2 hover:scale-110"
            style={{
                maxWidth: "100px",
                minWidth: "80px",
                width: "10%",
            }}
        >
            <img
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                alt="Major League Hacking 2026 Hackathon Season"
                className="w-full"
            />
        </a>
    )
}