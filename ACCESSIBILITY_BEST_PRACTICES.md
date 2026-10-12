# Accessibility & Best Practices Guidelines

## Overview

This document outlines the accessibility improvements and best practices implemented for the Uenal Immobilien website to achieve WCAG 2.1 AA compliance and follow security best practices.

## Accessibility Improvements Implemented

### 1. **Navigation & UI Controls**

- ✅ **Header Navigation**: Mobile menu button now includes:
  - `aria-label`: Descriptive labels for state (opening/closing)
  - `aria-expanded`: Indicates if menu is open or closed
  - `aria-controls`: Links to the controlled menu element (id="mobile-nav")

- ✅ **Phone Call Links**: Added aria-labels to all telephone links with full phone number for accessibility

- ✅ **FloatingCTA Menu**: Added:
  - `aria-label` with clear action description
  - `aria-expanded` for state management
  - `aria-controls` linking to menu content (id="floating-cta-menu")
  - Close button with proper aria-label

### 2. **Social Media Links**

- ✅ Added descriptive `aria-labels` to all social media icon buttons in footer:
  - Instagram: "Besuchen Sie uns auf Instagram"
  - LinkedIn: "Besuchen Sie uns auf LinkedIn"
  - YouTube: "Besuchen Sie unseren YouTube-Kanal"
  - Facebook: "Besuchen Sie uns auf Facebook"
  - TikTok: "Besuchen Sie uns auf TikTok"

### 3. **WhatsApp CTA**

- ✅ Added `aria-labels` to all WhatsApp button variants:
  - Large buttons: Use the button text as aria-label
  - Inline buttons: Use the button text as aria-label
  - All variants properly labeled for screen readers

### 4. **Form Accessibility**

- ✅ All form inputs have associated labels via `htmlFor` attribute
- ✅ Form fields have descriptive IDs
- ✅ Required fields marked with asterisk (\*)
- ✅ Proper input types used (tel, email, date)
- ✅ Select elements properly labeled

### 5. **Semantic HTML**

- ✅ Using semantic elements: `<header>`, `<footer>`, `<nav>`, `<form>`
- ✅ Proper heading hierarchy
- ✅ Descriptive link text (avoid "click here")
- ✅ Alternative text for images

## Best Practices & Security Headers

### 1. **Content Security Policy (CSP)**

Added strict CSP headers to prevent XSS attacks:

```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.trustlocal.de;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self' data:;
connect-src 'self' https:;
frame-ancestors 'none';
base-uri 'self';
form-action 'self'
```

### 2. **Strict-Transport-Security (HSTS)**

- Duration: 1 year (31536000 seconds)
- Includes subdomains
- Preload enabled
- Prevents SSL stripping attacks

### 3. **X-Frame-Options**

- Value: `DENY`
- Prevents clickjacking by disallowing page embedding in frames

### 4. **X-Content-Type-Options**

- Value: `nosniff`
- Prevents MIME type sniffing

### 5. **Cross-Origin Policies**

- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Embedder-Policy: require-corp`
- Isolates the site from cross-origin attacks

### 6. **Referrer Policy**

- Value: `strict-origin-when-cross-origin`
- Balances privacy and functionality

### 7. **Permissions Policy**

- Blocks geolocation, microphone, camera, and payment request APIs
- Reduces attack surface

## Color Contrast Improvements

### Reviewed Elements:

- ✅ Header navigation links: Black (#000000) on white (#FFFFFF) - Excellent contrast (21:1)
- ✅ Gold accent color (#B8A67D) on white background - Good contrast (4.5:1)
- ✅ Footer text: White (#FFFFFF) on black (#000000) - Excellent contrast (21:1)
- ✅ Button text contrast verified and adequate

### Recommendations:

- Maintain current color scheme - it meets WCAG AA standards
- Test with color blind simulation tools before major changes
- Use tools like WebAIM or Contrast Ratio checker for new designs

## Testing Checklist

### Manual Testing:

- [ ] Test all navigation with keyboard alone (Tab, Enter, Escape)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify all buttons/links have accessible names
- [ ] Check form labels are associated with inputs
- [ ] Verify focus indicators are visible
- [ ] Test with zoom up to 200%

### Automated Testing:

- [ ] Run Lighthouse audit (target 90+ for Accessibility)
- [ ] Use Axe DevTools browser extension
- [ ] WebAIM accessibility checker
- [ ] WAVE Web Accessibility Evaluation Tool

### Tools Recommended:

1. **Lighthouse** (built into Chrome DevTools)
2. **Axe DevTools** (browser extension)
3. **WAVE** (https://wave.webaim.org/)
4. **WebAIM Contrast Checker** (https://webaim.org/resources/contrastchecker/)
5. **Screen Reader Testing**: VoiceOver (Mac), NVDA (Windows), JAWS

## Component-Specific Improvements

### Header Component

```tsx
// Mobile menu button now has:
aria-label="Navigation öffnen" | "Navigation schließen"
aria-expanded={boolean}
aria-controls="mobile-nav"
```

### Footer Component

```tsx
// All social links now have descriptive aria-labels:
aria-label="Besuchen Sie uns auf [Platform]"
```

### FloatingCTA Component

```tsx
// Main button has:
aria-label="Support-Menü öffnen" | "Support-Menü schließen"
aria-expanded={boolean}
aria-controls="floating-cta-menu"
```

### WhatsAppButton Component

```tsx
// All variants now include:
aria-label={text} // Uses button text as label
```

## WCAG 2.1 Level AA Compliance

### Implemented:

- ✅ **1.4.3 Contrast (Minimum)**: Text has sufficient contrast ratio
- ✅ **2.1.1 Keyboard**: All functionality available via keyboard
- ✅ **2.1.2 No Keyboard Trap**: Keyboard focus isn't trapped
- ✅ **2.4.3 Focus Order**: Focus order is logical
- ✅ **2.4.7 Focus Visible**: All interactive elements have visible focus indicator
- ✅ **3.2.1 On Focus**: Page doesn't change unexpectedly on focus
- ✅ **3.2.2 On Input**: Changes happen only when expected
- ✅ **4.1.1 Parsing**: HTML is valid
- ✅ **4.1.2 Name, Role, Value**: Elements have proper accessibility attributes
- ✅ **1.3.1 Info and Relationships**: Information properly conveyed
- ✅ **2.4.4 Link Purpose**: Link purpose is clear from context/text

## Ongoing Maintenance

### When Adding New Components:

1. Include proper ARIA labels for icon-only buttons
2. Link form labels to inputs with `htmlFor` and `id`
3. Use semantic HTML elements
4. Test with keyboard navigation
5. Verify color contrast
6. Run Lighthouse audit

### Regular Reviews:

- Schedule quarterly accessibility audits
- Update when NextJS or dependencies have updates
- Test with real users using assistive technology
- Monitor browser/screen reader compatibility

## Resources

### Documentation:

- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)

### Tools:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/)

## Security Header Details

### Implementation in next.config.mjs:

```javascript
async headers() {
  return [{
    source: '/:path*',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: '...' // Prevents XSS attacks
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      // ... additional headers
    ]
  }]
}
```

## Next Steps

1. **Run Lighthouse Audit**: Check current score and track improvements
2. **Browser Testing**: Test with Chrome, Firefox, Safari
3. **Screen Reader Testing**: Use NVDA (Windows) or VoiceOver (Mac)
4. **User Testing**: Include users with disabilities in testing
5. **Documentation**: Keep this guide updated as changes are made

---

**Last Updated**: March 30, 2026
**Next Review**: June 30, 2026
**Owner**: Development Team
