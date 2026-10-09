# Integrations

Under **Settings → Integrations**, an Administrator can connect services your church
already uses. Today that's **your own email server**: Announcements can send its emails through your
church's own email account instead of HolyCRM's.

You can also connect up to five **webhooks** to pass announcements and what happens in your
church (new visitors, members, prayer requests, registrations, serving answers) on to your own
automations (see below).

## Why send through your own email account

- **Emails come from your church's address** (for example `office@yourchurch.org`), so replies
  go straight to you and people recognize the sender.
- **No HolyCRM monthly limit.** Emails sent through your own account don't count toward the
  [1,000 emails a month](#/bulk-email) that come with HolyCRM. Your email provider's own
  sending limits apply instead (see below).

## Before you start

You need an email account that allows sending through **SMTP**, and its settings. Most do:

- **Google (Gmail or Google Workspace):** server `smtp.gmail.com`, port 587. Use an **app
  password**, not your normal password: in your Google Account go to Security → 2-Step
  Verification → App passwords. Google Workspace accounts can send about 2,000 emails a day.
- **Microsoft 365 / Outlook:** server `smtp.office365.com`, port 587. Your Microsoft 365
  administrator may need to allow "Authenticated SMTP" for the mailbox.
- **Mailgun, SendGrid, Amazon SES, Brevo** and similar sending services: use the SMTP
  credentials from your account with them.

If you're not sure, ask whoever looks after your church's email for the "SMTP settings".

## Setting it up

1. Go to **Settings → Integrations**.
2. Choose your **Provider**. This fills in the server and port for you, and shows a tip for
   that provider.
3. Enter the **Username** and **Password**, the **From address** your emails should come
   from, and the **From name** people will see (usually your church's name). The from address
   must be one your account is allowed to send from.
4. Click **Save**.
5. Click **Send test email**. HolyCRM sends a test to your own email address through your
   server and shows the result after a few seconds. Check it arrived (look in spam too).
6. Click **Turn on**.

From then on, Announcements shows **"Sending through your own email server"** instead of the
monthly limit, and every email goes out through your account.

You can only turn it on after a successful test, and **saving any change turns it off again**
until you send a new test. That way it's never on with settings that don't work.

## If the test fails

The screen explains what went wrong in plain words, with the technical message underneath:

- **The server rejected the username or password:** check them again. With Google, make sure
  you used an app password.
- **Couldn't reach the server:** check the server name and port.
- **The secure connection failed:** port 587 goes with STARTTLS, port 465 with SSL/TLS.
- **The server refused the email:** the from address is probably not one this account may
  send from.

Problems with real sends show up in the same place, as **Last problem**, and under the send in
Announcements' **Recent sends**. If your server can't deliver an email, that email fails: HolyCRM
never sends it through its own email instead.

## Turning it off or removing it

**Turn off** goes back to sending through HolyCRM's email, which counts toward the monthly
limit again. Your settings stay saved, so you can turn it back on later. **Remove** deletes the
settings; emails still waiting to go out through your server will fail.

## Webhooks (automations)

A webhook sends things to a web address of your own, usually an automation tool such as
**Zapier**, **Make** or **n8n**, where you decide what happens next: send it on through
WhatsApp or Telegram, add the person to a spreadsheet, notify the welcome team, and so on. It's
meant for whoever looks after your church's tech; nothing changes for members. You can add up
to **5 webhooks**, each with its own address and its own choice of what it receives.

### What a webhook can receive

Tick what each webhook should get:

- **Announcements you choose to send to webhooks** (see [Announcements](#/bulk-email)).
- **New visitor**: anyone who fills in the "New here?" form or is added in Visitors.
- **New member** (never children).
- **New prayer request**: who asked and how to reach them. **The request itself is never
  sent**: your team reads it inside HolyCRM.
- **Event registration**.
- **A volunteer confirmed** or **declined a serving slot**.

**Privacy:** deliveries include names, email addresses and phone numbers. Children (members
marked as minors, with guardians, or under your church's minor age) are never included in
anything sent to a webhook, and notes, addresses and birthdates are never sent. Only connect
services your church trusts and is allowed to share this information with.

### Setting one up

1. In your automation tool, create a flow that starts with "receive a webhook" (Zapier: *Webhooks
   by Zapier → Catch Hook*; Make: *Custom webhook*; n8n: *Webhook* node). Copy the address it
   gives you; it starts with `https://`.
2. In **Integrations → Webhooks**, click **Add a webhook**, give it a name if you like, paste the
   address as the **Webhook URL**, tick **What to send** and click **Save**.
3. HolyCRM shows a **signing secret** once. Copy it and keep it with your automation: it lets your
   automation check that each delivery really comes from HolyCRM. If you lose it, click **New
   signing secret** (the old one stops working).
4. Click **Send test**. The screen shows what your webhook answered.
5. Click **Turn on**.

Changing the address or the format turns the webhook off until a new test succeeds; changing what
it receives doesn't. If a webhook doesn't answer, HolyCRM tries again several times over the
next hours; problems show on that webhook as **Last problem**, and for announcements also under
the send in **Recent sends**.

### Format: HolyCRM JSON or custom

By default each delivery is the same JSON for every tool, which Zapier, Make and n8n read without
any setup. Every delivery includes a ready-made line in your church's language, `summary` (for
example "New visitor: John Smith").

If the place you send to expects something else, choose **Custom (for developers)** and write the
body yourself, with placeholders HolyCRM fills in, plus extra headers if needed. **Start from an
example** fills it in for two common cases:

- **ntfy** (phone notifications): a plain-text message with a title.
- **Telegram** (a bot posting in a group): replace `YOUR_CHAT_ID` with your chat's id and use
  `https://api.telegram.org/bot<your bot token>/sendMessage` as the URL.

For developers: every request is signed. The `X-HolyCRM-Signature` header is `sha256=` + the
HMAC-SHA256 of `<X-HolyCRM-Timestamp>.<raw body>` with your signing secret (also with the custom
format, over the body actually sent). `X-HolyCRM-Event` says what happened, and
`X-HolyCRM-Delivery` stays the same when a delivery is retried, so you can ignore duplicates.
Templates use Go template syntax over the delivery: `{{.data.summary}}`, `{{.data.subject}}`,
`{{.church.name}}`, `{{range .data.recipients}}…{{end}}`, and `{{json …}}` to insert a value as
JSON. A template error makes the test fail with the error.

Only Administrators can see and change Integrations, and it's part of the paid plan.
