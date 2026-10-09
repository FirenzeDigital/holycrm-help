# Announcements & Email Templates

Send announcements, newsletters and updates to your congregation, and reuse designs as
templates.

## Composing an email

Choose your **audience** — everyone, a tag, a group, a ministry, or one specific member —
then write your subject and body using the composer.

The composer has three modes, switchable at any time (they all convert to the same content
underneath, so switching doesn't lose your work):

- **Blocks** (the default) — build your email visually from blocks: headings, paragraphs,
  images, buttons, lists, dividers, and multi-column layouts. Drag blocks to reorder them,
  duplicate or delete them, and click **+ Add block** to insert a new one.
- **HTML** — write raw HTML directly, for advanced users.
- **Markdown** — a simple, readable text shortcut for a quick plain email.

A **live preview** on the side shows exactly what recipients will see, including any merge
variables filled in with sample data.

### Columns

Use a **Columns** block to put more than one thing side-by-side in a row — for example, an
image next to a paragraph, or two buttons next to each other. Pick a width split (50/50,
33/33/33, etc.), then choose what each column holds. On a narrow phone screen, columns stack
on top of each other automatically so the layout still reads well.

### Personalizing with merge variables

Click into any text field in the composer (a heading, a paragraph, a button label…), then
click a variable from the toolbar (like **First name**) to insert it at your cursor as
`{{first_name}}`. It's replaced with each recipient's actual value when the email sends —
the preview shows this using a sample recipient so you can check it looks right before
sending.

### Sending a test first

Use **Send test to my email** to receive the exact email you've composed at your own
address before sending it to your real audience — a good habit before any real send.

### Sending as an app notification

**Send as** has three boxes you can combine: **Email**, **App notification** and **Webhooks**. An app notification is a short
message: the **Subject** is its title and **Notification text** (up to 200 characters) is
the message; merge variables work in both. It reaches people whose member record is linked to
a HolyCRM login: they see it in the app's bell, and on their phone if they turned
notifications on. People without a login only get the email. **Send test notification to
me** shows you how it looks first.

### Sending to your webhooks

If an Administrator has turned on [webhooks](#/integrations) that receive announcements, tick
**Webhooks** under **Send as** (alone or with email and app notification); otherwise the box is
greyed out. The
announcement — subject, message and the list of people it's for, with their names, emails and
phones — goes to your own automation (for example a Zapier, Make or n8n flow), which can pass it
on through WhatsApp, Telegram, SMS or anything else. Sending to the webhook doesn't count
toward the monthly email limit. **Recent sends** shows whether the webhook received it.

## Email Templates

Save a design you'll reuse — a welcome email, a monthly newsletter layout — as a Template,
then load it into a new announcement later instead of rebuilding it from scratch. Templates
show merge variables as literal `{{placeholders}}` in the preview, since there's no specific
recipient yet.

## Branding

- **Your church's logo**, if you've uploaded one in [Church Settings](#/church-settings),
  can be inserted into any email with one click via the composer's **Church logo** button.
- Every email sent through HolyCRM includes a small "Sent with HolyCRM" line — this isn't
  something you can remove, and it's kept deliberately understated.

## After you send

Emails go out in the background, usually within a few minutes, so you can leave the screen
right away. **Recent sends** shows the progress of each send: how many have been delivered
out of the total, and **Sending…** while some are still on their way. If an email can't be
delivered (for example, the address doesn't exist), it's counted as **Failed** and the
reason is shown under that send; the others still go out. A test email arrives the same way,
usually within a minute.

## Limits

A single send is capped at **500 recipients**. This keeps sending reliable; if your audience
is bigger than that, ask about splitting the send.

**Monthly email limit.** Each church can send up to **1,000 emails per month** (every
recipient counts as one email, test emails included). The screen shows how many you've used
and when the count resets, on the 1st of each month. A send that would go over the limit
isn't sent at all, so nobody gets half a message. App notifications don't count toward this
limit, so for short announcements they're a good alternative.

To send without this limit, an Administrator can connect your church's own email account
under [Integrations](#/integrations).

**Need more emails?** An Administrator can buy an **email pack** in [Billing](#/plans-billing):
5,000 emails for US$5. Pack emails are used only after the month's 1,000 run out, and they never
expire. The screen shows how many you have left.

## What's not built yet

Scheduling a send for later (sends go out immediately), SMS as a channel, open/click
tracking, and nested columns-within-columns.
