# Use HolyCRM from ChatGPT or Claude

You can connect HolyCRM to ChatGPT, Claude or another AI assistant and ask about your church in
your own words. For example:

- *"Which visitors came in the last month and nobody has contacted yet?"*
- *"Who hasn't come to their small group in the last three weeks?"*
- *"What events do we have in November?"*
- *"Add María Gómez as a visitor. She came today and is interested in the youth group."*

The assistant looks the answer up in HolyCRM and explains it, so you don't have to search
through screens.

## What it can do

- **Look things up:** people, [visitors](#/visitors) (including who hasn't been contacted yet),
  absences in [small groups](#/groups), and [events](#/events).
- **Make a few changes:** add a visitor, log a follow-up (a call, a WhatsApp message, a visit)
  and move a visitor to another stage. **Nothing is saved until you confirm it**: the
  assistant shows you exactly what will change and waits for your "yes".
- It only sees what **your role** can see in HolyCRM, and it **never sees children's records**.
- Turning a visitor into a member is still done in the app.

## Before you start: an Administrator turns it on

AI assistants are off for every church until an Administrator turns them on:

1. Go to **Settings → AI assistants**.
2. Read what is shared (below) and click **Turn on**.

The same screen shows the address to add in your AI assistant, and **who uses it**: each
person, the apps they used and when. An Administrator can **Block** a person (it stops at
once, whatever app they use) or turn AI assistants off for everyone.

## Connect Claude

HolyCRM is in Claude's connector directory:

1. Open [HolyCRM in Claude's directory](https://claude.ai/directory/holycrm-app), or in Claude
   (web, desktop or mobile app) go to **Customize → Connectors** and search for *HolyCRM*.
2. Click **Connect**. A HolyCRM page opens: sign in as usual if you're asked, check that it
   says Claude wants to connect, and click **Allow**.
3. Back in Claude, ask your question.

If your Claude organization doesn't allow directory connectors, an administrator can add it as
a custom connector instead, with the address from **Settings → AI assistants**
(`https://mcp.holycrm.app/mcp`).

## Connect ChatGPT

In ChatGPT, adding your own connection needs a paid plan with **Developer mode** turned on
(**Settings → Apps → Advanced settings**). Then create an app with the same address, choose
OAuth sign-in, and approve it on the HolyCRM page as above. We're working on listing HolyCRM in
ChatGPT's app directory so it can be added more easily.

The menus of these apps change from time to time; if you can't find an option, search their
help for "custom connector" or "MCP".

## Tips

- **If you belong to more than one church**, say which one: *"In Iglesia Gracia, who…"*.
- **Check before you confirm.** Read the change the assistant shows you before you say yes.
- **Dates and times** come from HolyCRM in universal time (UTC); the assistant usually
  converts them, but check event times in the app if it matters.

## Privacy and control

- **What you ask about is sent to the AI assistant you use**, for example names, phone numbers,
  visitors, groups and events, and that company's terms and privacy policy apply to it. Only
  connect assistants your church is comfortable using. See [Data & Privacy](#/data-privacy).
- Each person connects their **own** account; there is no shared church login.
- Your connection stays active while you use it. After **14 days** without using it, or if you
  change your password, you'll be asked to connect again.
- To disconnect, remove HolyCRM from your AI app's connectors.

## If something doesn't work

- **"AI assistants are turned off for…"**: ask an Administrator to turn them on in
  **Settings → AI assistants**.
- **"…has turned off AI assistant access for your account"**: an Administrator blocked your
  access; talk to them.
- **"Your HolyCRM sign-in has expired"**: remove HolyCRM from your AI app and connect it again.
