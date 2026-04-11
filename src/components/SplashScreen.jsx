import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    const splashSteps = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];

    useEffect(() => {
        // Prevent scroll
        document.body.style.overflow = 'hidden';

        const timer = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev < splashSteps.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsVisible(false);
                        document.body.style.overflow = '';
                    }, 600);
                    return prev;
                }
            });
        }, 80);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = '';
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div id="splash-screen" className={!isVisible ? 'hidden' : ''} style={{ transition: 'opacity 0.5s' }}>
            <div className="wrapper">
                <svg viewBox="0 -250 680 750" xmlns="http://www.w3.org/2000/svg">
                    <title>Sri Sai Millets Hut Logo</title>
                    <desc>Animated step-by-step logo build</desc>

                    {/* Step 1: Circle frame */}
                    <g id="s1" style={{ opacity: currentStep >= 0 ? 1 : 0, transition: 'opacity 0.06s' }}>
                        <circle cx="340" cy="210" r="190" fill="#FFF8EC" stroke="#C88A2A" strokeWidth="2.5"/>
                        <circle cx="340" cy="22" r="5" fill="#C88A2A"/>
                        <circle cx="340" cy="398" r="5" fill="#C88A2A"/>
                        <circle cx="152" cy="210" r="5" fill="#C88A2A"/>
                        <circle cx="528" cy="210" r="5" fill="#C88A2A"/>
                        <circle cx="206" cy="76" r="3.5" fill="#C88A2A" opacity="0.6"/>
                        <circle cx="474" cy="76" r="3.5" fill="#C88A2A" opacity="0.6"/>
                        <circle cx="206" cy="344" r="3.5" fill="#C88A2A" opacity="0.6"/>
                        <circle cx="474" cy="344" r="3.5" fill="#C88A2A" opacity="0.6"/>
                    </g>

                    {/* Step 2: Roof */}
                    <g id="s2" style={{ opacity: currentStep >= 1 ? 1 : 0, transition: 'opacity 0.06s' }}>
                        <polygon points="340,85 248,190 432,190" fill="#4A7C3F"/>
                        <line x1="340" y1="85" x2="340" y2="190" stroke="#3B6B30" strokeWidth="1" opacity="0.4"/>
                    </g>

                    {/* Step 3: Hut body & door */}
                    <g id="s3" style={{ opacity: currentStep >= 2 ? 1 : 0, transition: 'opacity 0.06s' }}>
                        <rect x="262" y="190" width="156" height="108" fill="#7B4F1E" rx="2"/>
                        <rect x="313" y="228" width="54" height="70" fill="#3B2A10" rx="4"/>
                        <ellipse cx="340" cy="230" rx="27" ry="11" fill="#3B2A10"/>
                        <rect x="276" y="206" width="26" height="22" fill="#3B2A10" rx="2"/>
                        <line x1="289" y1="206" x2="289" y2="228" stroke="#5C3A15" strokeWidth="1"/>
                        <line x1="276" y1="217" x2="302" y2="217" stroke="#5C3A15" strokeWidth="1"/>
                        <rect x="378" y="206" width="26" height="22" fill="#3B2A10" rx="2"/>
                        <line x1="391" y1="206" x2="391" y2="228" stroke="#5C3A15" strokeWidth="1"/>
                        <line x1="378" y1="217" x2="404" y2="217" stroke="#5C3A15" strokeWidth="1"/>
                        <line x1="248" y1="298" x2="432" y2="298" stroke="#7B4F1E" strokeWidth="1.5" opacity="0.5"/>
                    </g>

                    {/* Step 4: Left millet stalk */}
                    <g id="s4" style={{ opacity: currentStep >= 3 ? 1 : 0, transition: 'opacity 0.06s' }}>
                        <path d="M232,298 C230,265 228,235 226,195" stroke="#5C8C3A" strokeWidth="2.5" fill="none"/>
                        <ellipse cx="224" cy="193" rx="7" ry="12" fill="#C88A2A"/>
                        <ellipse cx="218" cy="205" rx="6" ry="9" fill="#C88A2A" opacity="0.85"/>
                        <ellipse cx="230" cy="202" rx="6" ry="9" fill="#C88A2A" opacity="0.85"/>
                        <ellipse cx="213" cy="216" rx="5" ry="8" fill="#C88A2A" opacity="0.7"/>
                        <ellipse cx="235" cy="212" rx="5" ry="8" fill="#C88A2A" opacity="0.7"/>
                        <ellipse cx="220" cy="226" rx="4" ry="7" fill="#C88A2A" opacity="0.55"/>
                        <ellipse cx="230" cy="223" rx="4" ry="7" fill="#C88A2A" opacity="0.55"/>
                        <path d="M229,255 C218,246 207,236 202,224 C213,226 226,240 231,252Z" fill="#4A7C3F"/>
                        <path d="M230,272 C243,263 255,253 260,239 C248,245 234,257 230,270Z" fill="#4A7C3F" opacity="0.75"/>
                    </g>

                    {/* Step 5: Right millet stalk */}
                    <g id="s5" style={{ opacity: currentStep >= 4 ? 1 : 0, transition: 'opacity 0.06s' }}>
                        <path d="M448,298 C450,265 452,235 454,195" stroke="#5C8C3A" strokeWidth="2.5" fill="none"/>
                        <ellipse cx="456" cy="193" rx="7" ry="12" fill="#C88A2A"/>
                        <ellipse cx="450" cy="205" rx="6" ry="9" fill="#C88A2A" opacity="0.85"/>
                        <ellipse cx="462" cy="202" rx="6" ry="9" fill="#C88A2A" opacity="0.85"/>
                        <ellipse cx="445" cy="216" rx="5" ry="8" fill="#C88A2A" opacity="0.7"/>
                        <ellipse cx="467" cy="212" rx="5" ry="8" fill="#C88A2A" opacity="0.7"/>
                        <ellipse cx="450" cy="226" rx="4" ry="7" fill="#C88A2A" opacity="0.55"/>
                        <ellipse cx="462" cy="223" rx="4" ry="7" fill="#C88A2A" opacity="0.55"/>
                        <path d="M451,255 C462,246 473,236 478,224 C467,226 454,240 449,252Z" fill="#4A7C3F"/>
                        <path d="M450,272 C437,263 425,253 420,239 C432,245 446,257 450,270Z" fill="#4A7C3F" opacity="0.75"/>
                    </g>

                    {/* Step 6: Name text */}
                    <g id="s6" style={{ opacity: currentStep >= 5 ? 1 : 0, transition: 'opacity 0.06s' }}>
                        <text x="340" y="-180" textAnchor="middle" fontFamily="Georgia,serif" fontSize="24" fontWeight="700" fill="#C88A2A" letterSpacing="5">SRI SAI</text>
                        <line x1="172" y1="-165" x2="278" y2="-165" stroke="#C88A2A" strokeWidth="1.5"/>
                        <line x1="402" y1="-165" x2="508" y2="-165" stroke="#C88A2A" strokeWidth="1.5"/>
                        <text x="340" y="-110" textAnchor="middle" fontFamily="Georgia,serif" fontSize="52" fontWeight="700" fill="#3B2A10" letterSpacing="4">MILLETS</text>
                        <text x="340" y="-60" textAnchor="middle" fontFamily="Georgia,serif" fontSize="32" fontWeight="700" fill="#4A7C3F" letterSpacing="12">HUT</text>
                    </g>

                    {/* Step 7: Tagline */}
                    <g id="s7" style={{ opacity: currentStep >= 6 ? 1 : 0, transition: 'opacity 0.06s' }}>
                        <text x="340" y="-15" textAnchor="middle" fontFamily="Georgia,serif" fontSize="16" fill="#6B4E1A" letterSpacing="3">— NATURE'S FINEST GRAINS —</text>
                        <circle cx="280" cy="15" r="3" fill="#C88A2A" opacity="0.5"/>
                        <circle cx="340" cy="15" r="4" fill="#C88A2A" opacity="0.8"/>
                        <circle cx="400" cy="15" r="3" fill="#C88A2A" opacity="0.5"/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default SplashScreen;
