# EmailJS contact form setup

The contact form in `index.html` sends mail through EmailJS.

## Required EmailJS values

Replace these values in `index.html`.

```js
const EMAILJS_CONFIG = {
  publicKey: "zBxltHXlWQt9glOPD",
  serviceId: "service_vpyqf6m",
  inquiryTemplateId: "template_c0fn0j5",
  autoReplyTemplateId: "template_h8z5xb7"
};
```

Set `autoReplyTemplateId` when you want the site to send a separate receipt email to the visitor.
If you configure EmailJS Linked Template / Auto-Reply on the inquiry template, this value can stay empty.

## Inquiry template

Send this template to `contact@suhojapan.com`.

Use these template variables:

- `{{to_email}}`: `contact@suhojapan.com`
- `{{reply_to}}`: visitor email
- `{{from_name}}`: visitor name
- `{{from_email}}`: visitor email
- `{{company}}`: company name
- `{{inquiry_type}}`: selected inquiry type
- `{{message}}`: message body
- `{{submitted_at}}`: submitted date/time

Recommended EmailJS settings:

- To Email: `{{to_email}}`
- Reply-To: `{{reply_to}}`
- From Name: `SUHO Japan Web Form`
- Subject: `[SUHO Japan] お問い合わせ: {{inquiry_type}}`

## Auto-reply template

Send this template to `{{to_email}}`.

When using the separate `autoReplyTemplateId`, the site sends `to_email` as the visitor email address.

Recommended subject:

```text
お問い合わせを受け付けました | SUHO Japan
```
