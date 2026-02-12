document.addEventListener('DOMContentLoaded', () => {
    // --- GLOBAL LANGUAGE STATE ---
    const translations = {
        en: {
            "brand": "GoToto",
            "role-tagline": "Choose Your Role to Continue",
            "passenger": "Passenger",
            "driver": "Driver",
            "login-title": "Enter Phone Number",
            "login-sub": "We will send a 6-digit OTP to verify",
            "send-otp": "Send OTP",
            "verify-title": "OTP Verification",
            "verify-sub": "Enter the code sent to",
            "verify-btn": "Verify OTP",
            "resend-text": "Didn't receive code?",
            "resend-btn": "Resend",
            "nearby-title": "Good Morning, User!",
            "nearby-sub": "Suggested nearby rides",
            "select-route": "Select Route",
            "driver-online": "Go Online",
            "driver-offline": "Go Offline",
            "driver-earnings": "Today's Earnings",
            "payout-methods": "Payout Methods",
            "support": "Support Center",
            "logout": "Logout",
            "lang-toggle": "EN / BN",
            "upload-docs": "Upload Documents",
            "verify-msg": "Please provide documents to verify your account",
            "license": "Driving License",
            "license-sub": "Front & Back Page",
            "rc": "Vehicle RC",
            "rc-sub": "Original Registration",
            "profile-photo": "Profile Photo",
            "profile-sub": "Clear selfie with vehicle",
            "submit-verif": "Submit for Verification",
            "verif-pending": "Verification Pending",
            "verif-sub": "Your documents are under review (24-48h)",
            "approval-est": "Estimated approval",
            "skip-demo": "Skip Onboarding (Demo)",
            "trip-completed": "Trip Completed",
            "excellent-work": "Excellent work today!",
            "collect-cash": "Collect Cash",
            "platform-fee": "Including platform fee",
            "back-home": "Back to Home",
            "nav-pickup": "Navigating to Pickup",
            "arrived-pickup": "Arrived at Pickup",
            "start-ride": "Start Ride",
            "end-ride": "End Ride",
            "ride-in-progress": "Ride in Progress",
            "new-request": "New Ride Request!",
            "est-fare": "Est. Fare",
            "accept-ride": "Accept Ride",
            "decline": "Decline",
            "pickup-at": "Pickup At",
            "sos-alert": "SOS Alert Sent! Emergency contacts and local police notified."
        },
        bn: {
            "brand": "গো টোটো",
            "role-tagline": "চালিয়ে যেতে আপনার ভূমিকা চয়ন করুন",
            "passenger": "যাত্রী",
            "driver": "চালক",
            "login-title": "ফোন নম্বর লিখুন",
            "login-sub": "যাচাই করতে আমরা একটি ৬-সংখ্যার OTP পাঠাব",
            "send-otp": "ওটিপি পাঠান",
            "verify-title": "ওটিপি যাচাইকরণ",
            "verify-sub": "কোডটি লিখুন যা পাঠানো হয়েছে",
            "verify-btn": "ওটিপি যাচাই করুন",
            "resend-text": "কোড পাননি?",
            "resend-btn": "পুনরায় পাঠান",
            "nearby-title": "শুভ সকাল, ব্যবহারকারী!",
            "nearby-sub": "কাছাকাছি প্রস্তাবিত রাইড",
            "select-route": "রুট নির্বাচন করুন",
            "driver-online": "অনলাইন যান",
            "driver-offline": "অফলাইন যান",
            "driver-earnings": "আজকের আয়",
            "payout-methods": "পেমেন্ট পদ্ধতি",
            "support": "সহায়তা কেন্দ্র",
            "logout": "লগআউট",
            "lang-toggle": "BN / EN",
            "upload-docs": "নথি আপলোড করুন",
            "verify-msg": "আপনার অ্যাকাউন্ট যাচাই করতে নথি প্রদান করুন",
            "license": "ড্রাইভিং লাইসেন্স",
            "license-sub": "সামনের এবং পিছনের পেজ",
            "rc": "যানবাহন আরসি",
            "rc-sub": "আসল রেজিস্ট্রেশন",
            "profile-photo": "প্রোফাইল ফটো",
            "profile-sub": "গাড়ির সাথে পরিষ্কার সেলফি",
            "submit-verif": "যাচাইয়ের জন্য জমা দিন",
            "verif-pending": "যাচাইকরণ পেন্ডিং",
            "verif-sub": "আপনার নথি পর্যালোচনা করা হচ্ছে (২৪-৪৮ ঘণ্টা)",
            "approval-est": "আনুমানিক অনুমোদন",
            "skip-demo": "অনবোর্ডিং এড়িয়ে যান (ডেমো)",
            "trip-completed": "ট্রিপ সম্পন্ন হয়েছে",
            "excellent-work": "আজকে চমৎকার কাজ করেছেন!",
            "collect-cash": "নগদ সংগ্রহ করুন",
            "platform-fee": "প্ল্যাটফর্ম ফি সহ",
            "back-home": "হোমে ফিরে যান",
            "nav-pickup": "পিকআপে নেভিগেট করা হচ্ছে",
            "arrived-pickup": "পিকআপে পৌঁছেছেন",
            "start-ride": "রাইড শুরু করুন",
            "end-ride": "রাইড শেষ করুন",
            "ride-in-progress": "রাইড চলছে",
            "new-request": "নতুন রাইড রিকোয়েস্ট!",
            "est-fare": "আনুমানিক ভাড়া",
            "accept-ride": "একসেপ্ট করুন",
            "decline": "প্রত্যাখ্যান",
            "pickup-at": "পিকআপ এখানে",
            "sos-alert": "এসওএস অ্যালার্ট পাঠানো হয়েছে! জরুরি যোগাযোগ এবং স্থানীয় পুলিশকে জানানো হয়েছে।"
        }
    };

    let currentLang = localStorage.getItem('appLanguage') || 'en';

    function applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                // If it's a button with a span inside, update the span
                const innerSpan = el.querySelector('span');
                if (innerSpan) {
                    innerSpan.textContent = translations[currentLang][key];
                } else {
                    el.textContent = translations[currentLang][key];
                }
            }
        });

        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) langBtn.textContent = translations[currentLang]["lang-toggle"];
    }

    // Initialize Language
    applyTranslations();

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'bn' : 'en';
            localStorage.setItem('appLanguage', currentLang);
            applyTranslations();
        });
    }

    // Role Selection Logic
    const passengerBtn = document.querySelector('.passenger-btn');
    const driverBtnOption = document.querySelector('.driver-btn');

    if (passengerBtn) {
        passengerBtn.addEventListener('click', () => {
            localStorage.setItem('userRole', 'passenger');
            window.location.href = 'login.html';
        });
    }
    if (driverBtnOption) {
        driverBtnOption.addEventListener('click', () => {
            localStorage.setItem('userRole', 'driver');
            window.location.href = 'driver-login.html';
        });
    }

    // --- LOGIN & OTP LOGIC ---
    function setupOTP() {
        const otpBtn = document.getElementById('send-otp-btn');
        if (!otpBtn) return;

        otpBtn.addEventListener('click', () => {
            const phoneInput = document.getElementById('phone-input') || document.getElementById('driver-phone');
            if (!phoneInput) return;

            const phone = phoneInput.value.trim();
            // Robust Role Detection: Prefer URL context, then localStorage
            let role = 'passenger';
            if (window.location.pathname.includes('driver')) role = 'driver';
            else role = localStorage.getItem('userRole') || 'passenger';

            if (phone.length >= 10) {
                localStorage.setItem('userPhone', '+91 ' + phone);
                localStorage.setItem('userRole', role);

                const targetPage = (role === 'driver') ? 'driver-otp.html' : 'otp-verification.html';
                window.location.href = targetPage;
            } else {
                phoneInput.classList.add('input-error');
                setTimeout(() => phoneInput.classList.remove('input-error'), 500);
            }
        });

        // Numeric restrictive input
        const phoneInput = document.getElementById('phone-input') || document.getElementById('driver-phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
            });
        }
    }

    setupOTP();

    const otpInputs = document.querySelectorAll('.otp-input');
    if (otpInputs.length > 0) {
        const displayPhone = document.getElementById('display-phone');
        if (displayPhone) displayPhone.textContent = localStorage.getItem('userPhone') || '+91 1XXX XXXXXX';

        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });

        // Timer
        const timerCount = document.getElementById('timer-count');
        const resendBtn = document.getElementById('resend-link');
        let timeLeft = 59;
        if (timerCount) {
            const timer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    if (resendBtn) resendBtn.disabled = false;
                } else {
                    timeLeft--;
                    timerCount.textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
                }
            }, 1000);
        }

        // Auto-focus first input
        if (otpInputs[0]) otpInputs[0].focus();

        const verifyBtn = document.getElementById('verify-btn');
        if (verifyBtn) {
            verifyBtn.addEventListener('click', () => {
                let otp = '';
                otpInputs.forEach(i => otp += i.value);

                if (otp.length === 6) {
                    const role = localStorage.getItem('userRole');

                    // Local Auth Logic
                    localStorage.setItem('authToken', 'simple_mock_token');
                    localStorage.setItem('userData', JSON.stringify({
                        name: (role === 'driver') ? 'Abdul Gani' : 'User One',
                        role: role
                    }));

                    window.location.href = (role === 'driver') ? 'driver-docs.html' : 'home.html';
                } else {
                    otpInputs.forEach(i => i.classList.add('input-error'));
                    setTimeout(() => otpInputs.forEach(i => i.classList.remove('input-error')), 500);
                }
            });
        }
    }

    // --- PASSENGER HOME & TRACKING ---
    const selectRouteBtn = document.getElementById('select-route-btn');
    if (selectRouteBtn) {
        selectRouteBtn.addEventListener('click', () => { window.location.href = 'route-selection.html'; });

        // Initialize Nearby Vehicles
        initNearbyVehicles();
    }

    async function initNearbyVehicles() {
        const mapView = document.querySelector('.map-view');
        if (!mapView) return;

        // Local Data Fetch
        const fetchVehicles = async () => {
            return [
                { vehicleId: 'TR-101', lat: 400, lng: 150, driverName: 'Abul' },
                { vehicleId: 'TR-202', lat: 300, lng: 250, driverName: 'Zahir' },
                { vehicleId: 'TR-303', lat: 550, lng: 80, driverName: 'Rafiq' }
            ];
        };

        const vehicles = await fetchVehicles();

        // Clear existing markers (except user)
        const oldMarkers = mapView.querySelectorAll('.vehicle-marker');
        oldMarkers.forEach(m => m.remove());

        // Render new markers
        vehicles.forEach(v => {
            const marker = document.createElement('div');
            marker.className = 'vehicle-marker';
            marker.style.top = v.lat + 'px';
            marker.style.left = v.lng + 'px';
            marker.innerHTML = `
                <div class="marker-dot"></div>
                <div class="toto-icon-mini">🛺</div>
                <div class="marker-label" style="position:absolute; bottom:-20px; background:white; padding:2px 8px; border-radius:10px; font-size:10px; font-weight:700; box-shadow:0 2px 5px rgba(0,0,0,0.1); white-space:nowrap;">
                    ${v.driverName}
                </div>
            `;
            mapView.appendChild(marker);
        });
    }

    const confirmBtn = document.getElementById('confirmRouteBtn');
    if (confirmBtn) {
        const routes = document.querySelectorAll('.route-item-card');
        routes.forEach(r => {
            r.addEventListener('click', () => {
                routes.forEach(c => c.classList.remove('selected'));
                r.classList.add('selected');
                confirmBtn.classList.remove('disabled');
            });
        });
        confirmBtn.addEventListener('click', () => {
            const selected = document.querySelector('.route-item-card.selected');
            localStorage.setItem('selectedRouteName', selected.querySelector('.route-name').textContent);
            localStorage.setItem('selectedRouteFare', selected.querySelector('.fare-amount').textContent);
            window.location.href = 'fare-estimation.html';
        });
    }

    const confirmRideBtn = document.getElementById('confirm-ride-btn');
    if (confirmRideBtn) {
        confirmRideBtn.addEventListener('click', () => {
            localStorage.setItem('rideState', 'searching'); // Reset state for new ride
            window.location.href = 'waiting.html';
        });
    }

    const assignedCard = document.getElementById('assignedCard');
    if (assignedCard) {
        setTimeout(() => {
            assignedCard.style.display = 'block';
            assignedCard.style.animation = 'slideUp 0.6s ease-out forwards';
        }, 2000);
    }

    const startTripBtn = document.getElementById('startTripBtn');
    if (startTripBtn) {
        startTripBtn.addEventListener('click', () => {
            localStorage.setItem('rideState', 'in_progress'); // Sync state
            window.location.href = 'tracking.html';
        });
    }

    // Moving Indicator
    const movingToto = document.getElementById('movingToto');
    const tripStatus = document.getElementById('tripStatus');
    const finishRideBtn = document.getElementById('finishRideBtn');

    if (movingToto) {
        let pos = 600;
        const interval = setInterval(() => {
            pos -= 1;
            movingToto.style.top = pos + 'px';

            // Calculate horizontal offset to follow the path M100 600 L 200 400 L 290 200
            if (pos >= 400) {
                // Moving from 600 to 400 (y), 100 to 200 (x)
                let x = 100 + (600 - pos) * (100 / 200);
                movingToto.style.left = x + 'px';
            } else {
                // Moving from 400 to 200 (y), 200 to 290 (x)
                let x = 200 + (400 - pos) * (90 / 200);
                movingToto.style.left = x + 'px';
            }

            if (pos <= 200) {
                clearInterval(interval);
                if (tripStatus) {
                    tripStatus.textContent = 'Arrived at Destination';
                    tripStatus.parentElement.style.background = '#fee2e2';
                    tripStatus.style.color = '#ef4444';
                }
            }
        }, 30);
    }

    if (finishRideBtn) {
        finishRideBtn.addEventListener('click', () => {
            window.location.href = 'completed.html';
        });
    }

    const sosBtn = document.querySelector('.emergency-btn');
    if (sosBtn) {
        sosBtn.addEventListener('click', () => {
            alert(translations[currentLang]["sos-alert"]);
        });
    }

    // --- DRIVER HOME & REQUESTS ---
    const goOnlineBtn = document.getElementById('goOnlineBtn');
    const statusBadge = document.getElementById('statusBadge');
    const toggleText = document.getElementById('toggleText');
    const requestMarker = document.getElementById('requestMarker');
    const rideRequestSheet = document.getElementById('rideRequestSheet');

    let isOnline = false;

    if (goOnlineBtn) {
        goOnlineBtn.addEventListener('click', () => {
            isOnline = !isOnline;
            if (isOnline) {
                goOnlineBtn.classList.replace('offline', 'online');
                if (toggleText) toggleText.textContent = translations[currentLang]["driver-offline"];
                if (statusBadge) {
                    statusBadge.textContent = currentLang === 'en' ? 'Online' : 'অনলাইন';
                    statusBadge.classList.replace('offline-badge', 'online-badge');
                }
                setTimeout(() => {
                    if (isOnline) {
                        if (requestMarker) requestMarker.style.display = 'block';
                        if (rideRequestSheet) rideRequestSheet.style.display = 'block';
                        startRequestTimer();
                    }
                }, 3000);
            } else {
                goOnlineBtn.classList.replace('online', 'offline');
                if (toggleText) toggleText.textContent = translations[currentLang]["driver-online"];
                if (statusBadge) {
                    statusBadge.textContent = currentLang === 'en' ? 'Offline' : 'অফলাইন';
                    statusBadge.classList.replace('online-badge', 'offline-badge');
                }
                if (requestMarker) requestMarker.style.display = 'none';
                if (rideRequestSheet) rideRequestSheet.style.display = 'none';
            }
        });
    }

    function startRequestTimer() {
        const ring = document.getElementById('requestTimer');
        let t = 10;
        const timer = setInterval(() => {
            t--;
            if (ring) ring.textContent = t;
            if (t <= 0 || !isOnline) {
                clearInterval(timer);
                if (t <= 0 && rideRequestSheet) rideRequestSheet.style.display = 'none';
            }
        }, 1000);
    }

    // --- REAL-TIME SYNC LOGIC ---
    // Local synchronization between Passenger and Driver states

    // 1. Driver Side: Accept Ride
    const acceptRideBtn = document.getElementById('acceptRideBtn');
    if (acceptRideBtn) {
        acceptRideBtn.addEventListener('click', () => {
            localStorage.setItem('rideState', 'accepted');
            localStorage.setItem('driverLocation', JSON.stringify({ top: 700, left: 200 }));
            window.location.href = 'driver-tracking.html';
        });
    }

    // 2. Passenger Side: Listen for Driver Acceptance (in waiting.html)
    if (window.location.pathname.includes('waiting.html')) {
        const checkRideStatus = setInterval(() => {
            if (localStorage.getItem('rideState') === 'accepted') {
                clearInterval(checkRideStatus);
                const assignedCard = document.getElementById('assignedCard');
                if (assignedCard) {
                    assignedCard.style.display = 'block';
                    assignedCard.style.animation = 'slideUp 0.6s ease-out forwards';
                }
            }
        }, 1000);
    }

    // 3. Driver Side: Update Actions (in driver-tracking.html)
    const driverActionBtn = document.getElementById('driverActionBtn');
    const driverStatusText = document.getElementById('tripStatus');

    // Initialize Driver Tracking State
    if (driverActionBtn) {
        const state = localStorage.getItem('rideState');
        if (state === 'arrived') {
            if (driverStatusText) driverStatusText.textContent = translations[currentLang]["arrived-pickup"];
            driverActionBtn.textContent = translations[currentLang]["start-ride"];
        } else if (state === 'in_progress') {
            if (driverStatusText) driverStatusText.textContent = translations[currentLang]["ride-in-progress"];
            driverActionBtn.textContent = translations[currentLang]["end-ride"];
            driverActionBtn.style.background = '#ef4444';
        } else {
            if (driverStatusText) driverStatusText.textContent = translations[currentLang]["nav-pickup"];
            driverActionBtn.textContent = translations[currentLang]["arrived-pickup"];
        }

        driverActionBtn.addEventListener('click', () => {
            const currentState = localStorage.getItem('rideState');
            if (currentState === 'accepted' || !currentState) {
                localStorage.setItem('rideState', 'arrived');
                if (driverStatusText) driverStatusText.textContent = translations[currentLang]["arrived-pickup"];
                driverActionBtn.textContent = translations[currentLang]["start-ride"];
            } else if (currentState === 'arrived') {
                localStorage.setItem('rideState', 'in_progress');
                if (driverStatusText) driverStatusText.textContent = translations[currentLang]["ride-in-progress"];
                driverActionBtn.textContent = translations[currentLang]["end-ride"];
                driverActionBtn.style.background = '#ef4444';
            } else if (currentState === 'in_progress') {
                localStorage.setItem('rideState', 'completed');
                window.location.href = 'driver-completed.html';
            }
        });
    }

    // 4. Passenger Side: Listen for Progress (in tracking.html)
    if (window.location.pathname.includes('tracking.html') && !window.location.pathname.includes('driver')) {
        const passengerStatus = document.getElementById('tripStatus');
        const statusPoll = setInterval(() => {
            const state = localStorage.getItem('rideState');
            if (state === 'arrived' && passengerStatus) {
                passengerStatus.textContent = 'Driver Arrived at Pickup';
                passengerStatus.parentElement.style.background = '#dcfce7';
                passengerStatus.style.color = '#10b981';
            } else if (state === 'completed') {
                clearInterval(statusPoll);
                window.location.href = 'completed.html';
            }
        }, 1000);
    }
});
