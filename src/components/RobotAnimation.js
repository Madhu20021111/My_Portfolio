import React, { useState } from 'react';
import './RobotAnimation.css';

const RobotAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`hero-robot-wrapper ${isHovered ? 'is-excited' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Cute AI Robot Companion"
    >
      {/* Real Vector Animated Robot */}
      <svg
        className="hero-robot-svg"
        viewBox="0 0 320 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main White Body Shading Gradients */}
          <linearGradient id="cuteBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
          </linearGradient>

          {/* Dark Metallic Mechanical Joint Gradient */}
          <linearGradient id="jointGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          {/* Glossy Dark Screen Visor */}
          <linearGradient id="screenVisorGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="40%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Visor Glass Reflection */}
          <linearGradient id="screenGlossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
            <stop offset="35%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Cyan Glow Filter */}
          <filter id="cuteCyanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur1" />
            <feGaussianBlur stdDeviation="7" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Levitation Glow Floor Shadow */}
          <radialGradient id="floorLevitationGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#00d4ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </radialGradient>

          {/* Drop shadow for 3D depth */}
          <filter id="cute3DShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* --- FLOOR LEVITATION GLOW SHADOW --- */}
        <ellipse
          cx="160"
          cy="355"
          rx="68"
          ry="15"
          fill="url(#floorLevitationGlow)"
          className="cute-robot-floor-shadow"
        />

        {/* --- MAIN FLOATING ROBOT GROUP --- */}
        <g className="cute-robot-floating-body" filter="url(#cute3DShadow)">

          {/* === LEGS & FEET === */}
          <g className="robot-legs-group">
            {/* Left Hip Joint */}
            <circle cx="132" cy="265" r="9" fill="url(#jointGrad)" />
            {/* Left Thigh */}
            <rect x="122" y="268" width="20" height="32" rx="10" fill="url(#cuteBodyGrad)" />
            {/* Left Knee Joint Ring */}
            <rect x="123" y="295" width="18" height="8" rx="4" fill="url(#jointGrad)" />
            {/* Left Cyan Ankle Light Ring */}
            <ellipse cx="132" cy="308" rx="12" ry="3.5" fill="#00d4ff" filter="url(#cuteCyanGlow)" />
            {/* Left Boot */}
            <path
              d="M112 312 C112 304, 152 304, 152 312 L155 330 C155 336, 109 336, 109 330 Z"
              fill="url(#cuteBodyGrad)"
            />
            {/* Left Boot Sole */}
            <path
              d="M108 328 C108 328, 156 328, 156 328 L156 333 C156 336, 108 336, 108 333 Z"
              fill="#334155"
            />
            {/* Left Ankle Side Tech Button */}
            <circle cx="145" cy="316" r="4.5" fill="url(#jointGrad)" />
            <circle cx="145" cy="316" r="2.5" fill="#00d4ff" filter="url(#cuteCyanGlow)" />

            {/* Right Hip Joint */}
            <circle cx="188" cy="265" r="9" fill="url(#jointGrad)" />
            {/* Right Thigh */}
            <rect x="178" y="268" width="20" height="32" rx="10" fill="url(#cuteBodyGrad)" />
            {/* Right Knee Joint Ring */}
            <rect x="179" y="295" width="18" height="8" rx="4" fill="url(#jointGrad)" />
            {/* Right Cyan Ankle Light Ring */}
            <ellipse cx="188" cy="308" rx="12" ry="3.5" fill="#00d4ff" filter="url(#cuteCyanGlow)" />
            {/* Right Boot */}
            <path
              d="M168 312 C168 304, 208 304, 208 312 L211 330 C211 336, 165 336, 165 330 Z"
              fill="url(#cuteBodyGrad)"
            />
            {/* Right Boot Sole */}
            <path
              d="M164 328 C164 328, 212 328, 212 328 L212 333 C212 336, 164 336, 164 333 Z"
              fill="#334155"
            />
            {/* Right Ankle Side Tech Button */}
            <circle cx="175" cy="316" r="4.5" fill="url(#jointGrad)" />
            <circle cx="175" cy="316" r="2.5" fill="#00d4ff" filter="url(#cuteCyanGlow)" />
          </g>

          {/* === TORSO & CHEST HEART === */}
          <g className="robot-torso-group">
            {/* Main Rounded Belly / Body */}
            <path
              d="M112 188 C112 176, 208 176, 208 188 C208 230, 222 272, 160 274 C98 272, 112 230, 112 188 Z"
              fill="url(#cuteBodyGrad)"
            />

            {/* Torso Top Highlight */}
            <path
              d="M120 188 C120 180, 150 178, 160 178 C140 185, 126 210, 128 230 C122 215, 118 198, 120 188 Z"
              fill="url(#highlightGrad)"
            />

            {/* Chest Screen Dark Inset */}
            <rect
              x="134"
              y="198"
              width="52"
              height="40"
              rx="15"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="2"
            />

            {/* Glowing Cyan Heart */}
            <g filter="url(#cuteCyanGlow)" className="cute-robot-heart-pulse">
              <path
                d="M160 226 C160 226, 145 215, 145 208 C145 203, 149 200, 154 200 C157.5 200, 160 202.5, 160 203.5 C160 202.5, 162.5 200, 166 200 C171 200, 175 203, 175 208 C175 215, 160 226, 160 226 Z"
                fill="#00d4ff"
              />
            </g>

            {/* Tech Bottom Seam Line */}
            <path
              d="M136 254 Q160 262 184 254"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* === LEFT ARM (Resting / Swaying) === */}
          <g className="cute-robot-left-arm">
            {/* Shoulder Joint */}
            <circle cx="104" cy="195" r="11" fill="url(#jointGrad)" />
            {/* Upper Arm */}
            <rect
              x="86"
              y="198"
              width="20"
              height="38"
              rx="10"
              transform="rotate(18 86 198)"
              fill="url(#cuteBodyGrad)"
            />
            {/* Elbow Joint */}
            <circle cx="80" cy="236" r="8.5" fill="url(#jointGrad)" />
            {/* Forearm & Hand */}
            <rect
              x="72"
              y="238"
              width="18"
              height="36"
              rx="9"
              transform="rotate(6 72 238)"
              fill="url(#cuteBodyGrad)"
            />
            {/* Hand Clenched Fingers */}
            <circle cx="78" cy="275" r="7" fill="url(#jointGrad)" />
          </g>

          {/* === RIGHT ARM (Cute Waving Hand) === */}
          <g className="cute-robot-right-arm">
            {/* Shoulder Joint */}
            <circle cx="216" cy="195" r="11" fill="url(#jointGrad)" />
            {/* Upper Arm Lifted */}
            <rect
              x="215"
              y="185"
              width="20"
              height="40"
              rx="10"
              transform="rotate(-40 215 185)"
              fill="url(#cuteBodyGrad)"
            />
            {/* Elbow Joint */}
            <circle cx="248" cy="170" r="8.5" fill="url(#jointGrad)" />
            {/* Forearm angled up */}
            <rect
              x="244"
              y="142"
              width="20"
              height="34"
              rx="10"
              transform="rotate(-15 244 142)"
              fill="url(#cuteBodyGrad)"
            />
            {/* Palm Base */}
            <circle cx="258" cy="140" r="14" fill="url(#cuteBodyGrad)" />
            {/* Glowing Cyan Palm Repulsor Light */}
            <circle cx="258" cy="140" r="6.5" fill="#00d4ff" filter="url(#cuteCyanGlow)" />

            {/* 4 Cute Waving Fingers */}
            {/* Thumb */}
            <rect x="238" y="142" width="7" height="15" rx="3.5" transform="rotate(-65 238 142)" fill="url(#jointGrad)" />
            {/* Index Finger */}
            <rect x="246" y="118" width="6.5" height="16" rx="3.25" transform="rotate(-20 246 118)" fill="url(#jointGrad)" />
            {/* Middle Finger */}
            <rect x="256" y="114" width="6.5" height="17" rx="3.25" transform="rotate(2 256 114)" fill="url(#jointGrad)" />
            {/* Ring Finger */}
            <rect x="267" y="117" width="6.5" height="16" rx="3.25" transform="rotate(25 267 117)" fill="url(#jointGrad)" />
          </g>

          {/* === HEAD & HELMET GROUP === */}
          <g className="cute-robot-head-group">
            {/* Neck Joint */}
            <rect x="146" y="174" width="28" height="12" rx="5" fill="url(#jointGrad)" />

            {/* Top Antenna Base Glow */}
            <ellipse cx="160" cy="46" rx="14" ry="4" fill="#00d4ff" filter="url(#cuteCyanGlow)" />
            {/* Antenna Stem */}
            <rect x="158.5" y="24" width="3.5" height="22" rx="1.75" fill="url(#jointGrad)" />
            {/* Antenna Glowing Tip Ball */}
            <circle cx="160" cy="20" r="7.5" fill="url(#cuteBodyGrad)" />
            <circle cx="160" cy="20" r="4.5" fill="#00d4ff" filter="url(#cuteCyanGlow)" className="antenna-glow-pulse" />

            {/* Left Headphone Ear Cap */}
            <rect x="58" y="85" width="16" height="42" rx="8" fill="url(#cuteBodyGrad)" />
            {/* Left Glowing Cyan Ear Ring */}
            <circle cx="66" cy="106" r="11" fill="url(#jointGrad)" />
            <circle cx="66" cy="106" r="7" fill="#00d4ff" filter="url(#cuteCyanGlow)" />

            {/* Right Headphone Ear Cap */}
            <rect x="246" y="85" width="16" height="42" rx="8" fill="url(#cuteBodyGrad)" />
            {/* Right Glowing Cyan Ear Ring */}
            <circle cx="254" cy="106" r="11" fill="url(#jointGrad)" />
            <circle cx="254" cy="106" r="7" fill="#00d4ff" filter="url(#cuteCyanGlow)" />

            {/* Main Outer Head Shell */}
            <rect
              x="68"
              y="44"
              width="184"
              height="136"
              rx="54"
              fill="url(#cuteBodyGrad)"
            />

            {/* Head Specular Highlight */}
            <path
              d="M95 54 C125 46, 195 46, 225 54 C190 49, 130 49, 95 54 Z"
              fill="#ffffff"
              opacity="0.9"
            />

            {/* Dark Glossy Visor Screen */}
            <rect
              x="82"
              y="58"
              width="156"
              height="106"
              rx="42"
              fill="url(#screenVisorGrad)"
              stroke="#334155"
              strokeWidth="2.5"
            />

            {/* Visor Glass Reflection Curve */}
            <path
              d="M92 70 C120 62, 200 62, 228 70 C185 65, 135 65, 92 70 Z"
              fill="url(#screenGlossGrad)"
            />

            {/* Digital Cyan Face Details */}
            {/* Big Expressive Cute Eyes */}
            <g className="cute-robot-eyes">
              {/* Left Eye */}
              <g className="cute-left-eye">
                {/* Glowing Base */}
                <circle cx="120" cy="106" r="19" fill="#00d4ff" filter="url(#cuteCyanGlow)" />
                {/* Big Pupil Sparkle */}
                <circle cx="125" cy="100" r="6.5" fill="#ffffff" />
                {/* Small Sparkle */}
                <circle cx="114" cy="113" r="2.8" fill="#ffffff" />
              </g>

              {/* Right Eye */}
              <g className="cute-right-eye">
                {/* Glowing Base */}
                <circle cx="200" cy="106" r="19" fill="#00d4ff" filter="url(#cuteCyanGlow)" />
                {/* Big Pupil Sparkle */}
                <circle cx="205" cy="100" r="6.5" fill="#ffffff" />
                {/* Small Sparkle */}
                <circle cx="194" cy="113" r="2.8" fill="#ffffff" />
              </g>
            </g>

            {/* Cute Cyan Blushing Dashes Under Eyes */}
            <g filter="url(#cuteCyanGlow)">
              {/* Left Blush (///) */}
              <path
                d="M98 126 L102 133 M105 126 L109 133 M112 126 L116 133"
                stroke="#00d4ff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Right Blush (\\\) */}
              <path
                d="M204 133 L208 126 M211 133 L215 126 M218 133 L222 126"
                stroke="#00d4ff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>

            {/* Cute Happy Glowing Smile */}
            <g filter="url(#cuteCyanGlow)">
              <path
                d="M147 116 Q160 128 173 116"
                stroke="#00d4ff"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>

        </g>
      </svg>
    </div>
  );
};

export default RobotAnimation;
