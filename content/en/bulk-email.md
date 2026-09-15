# Bulk Email & Templates

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

## Email Templates

Save a design you'll reuse — a welcome email, a monthly newsletter layout — as a Template,
then load it into a new Bulk Email later instead of rebuilding it from scratch. Templates
show merge variables as literal `{{placeholders}}` in the preview, since there's no specific
recipient yet.

## Branding

- **Your church's logo**, if you've uploaded one in [Church Settings](#/church-settings),
  can be inserted into any email with one click via the composer's **Church logo** button.
- Every email sent through HolyCRM includes a small "Sent with HolyCRM" line — this isn't
  something you can remove, and it's kept deliberately understated.

## Limits

A single send is capped at **500 recipients**. This keeps sending reliable; if your audience
is bigger than that, ask about splitting the send.

## What's not built yet

Scheduling a send for later (sends go out immediately), SMS as a channel, open/click
tracking, and nested columns-within-columns.
