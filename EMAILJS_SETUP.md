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

Recommended EmailJS settings:

- To Email: `{{to_email}}`
- Reply-To: `contact@suhojapan.com`
- From Name: `SUHO Japan`
- Subject: `お問い合わせを受け付けました | SUHO Japan`

Recommended HTML:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>お問い合わせありがとうございます</title>
</head>
<body style="margin:0; padding:0; background-color:#f6f6f6; font-family: Arial, 'Hiragino Kaku Gothic ProN', 'Yu Gothic', Meiryo, sans-serif; color:#333333;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f6f6f6; margin:0; padding:30px 0;">
    <tr>
      <td align="center" style="padding:0 16px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:100%; max-width:600px; background-color:#ffffff; border:1px solid #e5e5e5; border-radius:8px; overflow:hidden;">
          <tr>
            <td style="background-color:#05070a; color:#ffffff; padding:22px 32px;">
              <img src="https://suho-site.pages.dev/assets/suho-logo-white.png" alt="SUHO Japan" style="display:block; width:150px; max-width:150px; height:auto; border:0;" />
            </td>
          </tr>
          <tr>
            <td style="background-color:#00d2ff; color:#001e27; padding:18px 32px; font-size:22px; font-weight:bold;">
              お問い合わせありがとうございます
            </td>
          </tr>
          <tr>
            <td style="padding:32px; font-size:15px; line-height:1.8;">
              <p style="margin:0 0 20px 0;">{{from_name}} 様</p>
              <p style="margin:0 0 16px 0;">
                このたびは、お問い合わせいただき誠にありがとうございます。<br />
                お問い合わせ内容を確かに受領いたしました。
              </p>
              <p style="margin:0 0 16px 0;">
                いただいた内容は担当者へ共有いたします。<br />
                後ほど担当者よりご連絡いたしますので、恐れ入りますが今しばらくお待ちくださいますようお願い申し上げます。
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:24px 0; background-color:#f9f9f9; border:1px solid #e5e5e5; border-radius:6px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 10px 0; font-weight:bold; color:#111111;">お問い合わせ内容</p>
                    <p style="margin:0 0 8px 0;"><strong>ご相談内容:</strong> {{inquiry_type}}</p>
                    <p style="margin:0 0 8px 0;"><strong>会社名:</strong> {{company}}</p>
                    <p style="margin:0; white-space:pre-line;">{{message}}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 16px 0;">
                何卒よろしくお願い申し上げます。
              </p>
              <p style="margin:24px 0 0 0; color:#666666; font-size:13px; line-height:1.7;">
                株式会社スホ (SUHO Co., Ltd.)<br />
                〒162-0065 東京都新宿区住吉町1-20 角張ビル 5F<br />
                contact@suhojapan.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```
