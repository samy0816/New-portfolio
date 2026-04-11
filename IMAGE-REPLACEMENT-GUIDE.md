# 📸 Image Replacement Guide - EasyBürger Case Study

This guide will help you replace all the image placeholders with your actual images.

## 🔍 How to Replace Images

### Method 1: Direct HTML Replacement
Search for the placeholder `div` and replace it with an `img` tag.

**Before:**
```html
<div class="image-placeholder card-sorting-placeholder">
    <div class="placeholder-icon">🗂️</div>
    <p class="placeholder-text">Card Sorting Results</p>
    <span class="placeholder-hint">Replace with your card sorting image</span>
</div>
```

**After:**
```html
<img src="images/card-sorting.png" alt="Card Sorting Results" class="case-study-image">
```

---

## 📋 List of All Image Placeholders

### 1. **Card Sorting Section**
- **Location:** Card Sorting & Taskflows section
- **Class:** `card-sorting-placeholder`
- **Suggested filename:** `card-sorting-results.png`
- **Description:** Your card sorting exercise results/diagram

---

### 2. **Low-Fidelity Wireframes** (4 images)

#### 2.1 Home Screen Wireframe
- **Class:** `wireframe-placeholder` (1st item)
- **Suggested filename:** `wireframe-home.png`
- **Description:** Low-fi wireframe of home screen

#### 2.2 Booking Flow Wireframe
- **Class:** `wireframe-placeholder` (2nd item)
- **Suggested filename:** `wireframe-booking.png`
- **Description:** Step-by-step booking wireframe

#### 2.3 Translation Wireframe
- **Class:** `wireframe-placeholder` (3rd item)
- **Suggested filename:** `wireframe-translation.png`
- **Description:** Live translation interface wireframe

#### 2.4 Appointments Wireframe
- **Class:** `wireframe-placeholder` (4th item)
- **Suggested filename:** `wireframe-appointments.png`
- **Description:** Calendar/appointments view wireframe

---

### 3. **High-Fidelity Prototypes** (7 images)

#### 3.1 High-Fidelity Home Screen
- **Class:** `hifi-placeholder` (1st large)
- **Suggested filename:** `hifi-home.png`
- **Description:** Fully designed home dashboard

#### 3.2 Service Selection
- **Class:** `hifi-placeholder` (1st in row)
- **Suggested filename:** `hifi-service-selection.png`
- **Description:** Service selection screen

#### 3.3 Document Checklist
- **Class:** `hifi-placeholder` (2nd in row)
- **Suggested filename:** `hifi-documents.png`
- **Description:** Document checklist screen

#### 3.4 Date Selection
- **Class:** `hifi-placeholder` (3rd in row)
- **Suggested filename:** `hifi-date.png`
- **Description:** Calendar date picker

#### 3.5 Booking Confirmation
- **Class:** `hifi-placeholder` (4th in row)
- **Suggested filename:** `hifi-confirmation.png`
- **Description:** Success confirmation screen

#### 3.6 Appointment List
- **Class:** `hifi-placeholder` (5th in row)
- **Suggested filename:** `hifi-appointments.png`
- **Description:** List of upcoming appointments

#### 3.7 Live Translation
- **Class:** `hifi-placeholder` (6th in row)
- **Suggested filename:** `hifi-translation.png`
- **Description:** Translation interface with chat

---

### 4. **Additional Screens** (6 images)

#### 4.1 Onboarding Screen
- **Class:** `additional-placeholder` (1st)
- **Suggested filename:** `screen-onboarding.png`
- **Description:** Welcome/onboarding flow

#### 4.2 User Profile
- **Class:** `additional-placeholder` (2nd)
- **Suggested filename:** `screen-profile.png`
- **Description:** User profile page

#### 4.3 Notifications
- **Class:** `additional-placeholder` (3rd)
- **Suggested filename:** `screen-notifications.png`
- **Description:** Notifications center

#### 4.4 Help & Resources
- **Class:** `additional-placeholder` (4th)
- **Suggested filename:** `screen-help.png`
- **Description:** Help and FAQ screen

#### 4.5 Office Locator
- **Class:** `additional-placeholder` (5th)
- **Suggested filename:** `screen-map.png`
- **Description:** Map with office locations

#### 4.6 Settings
- **Class:** `additional-placeholder` (6th)
- **Suggested filename:** `screen-settings.png`
- **Description:** Settings and preferences

---

## 🎨 Recommended Image Specifications

- **Format:** PNG or JPG
- **Resolution:** 2x or 3x for retina displays
- **Wireframes:** 800-1200px width
- **Hi-Fi Mockups:** 1200-1600px width
- **File size:** Optimize to under 500KB each for web performance

---

## 💡 Quick Tips

1. **Create an images folder:** Put all images in `images/` directory
2. **Name consistently:** Use the suggested filenames for easy organization
3. **Optimize images:** Use tools like TinyPNG or Squoosh to reduce file size
4. **Test on mobile:** Make sure images look good on smaller screens
5. **Add alt text:** Always include descriptive alt text for accessibility

---

## 🔧 CSS Class for Images

When you add your images, you can use this CSS class for consistent styling:

```css
.case-study-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.case-study-image:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

Add this to your `case-study.css` file if you want hover effects on images!

---

## 📝 Example Replacement

**Find in HTML (around line X):**
```html
<div class="wireframe-item fade-in-up" style="animation-delay: 0.1s;">
    <div class="image-placeholder wireframe-placeholder">
        <div class="placeholder-icon">📱</div>
        <p class="placeholder-text">Home Screen Wireframe</p>
        <span class="placeholder-hint">Replace with wireframe image</span>
    </div>
    <h4>Home Screen</h4>
    <p>Language selection and role-based navigation entry point</p>
</div>
```

**Replace with:**
```html
<div class="wireframe-item fade-in-up" style="animation-delay: 0.1s;">
    <img src="images/wireframe-home.png" alt="Home Screen Wireframe" class="case-study-image">
    <h4>Home Screen</h4>
    <p>Language selection and role-based navigation entry point</p>
</div>
```

---

## ✅ Checklist

- [ ] Card Sorting Results (1 image)
- [ ] Low-Fi Wireframes (4 images)
- [ ] Hi-Fi Prototypes (7 images)
- [ ] Additional Screens (6 images)
- [ ] Create images folder
- [ ] Optimize all images
- [ ] Test on different screen sizes
- [ ] Verify all images load correctly

---

**Total Images Needed: 18**

Good luck with your case study! 🚀
