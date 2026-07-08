/* ============================================================
   TELEGRAM CONTACT-FORM CONFIG
   ============================================================
   The contact form sends its data straight to the Telegram Bot
   API from the browser — no backend/server needed.

   HOW TO SET THIS UP (5 minutes):

   1) Create a bot (if you don't have one yet)
      - Open Telegram, message @BotFather
      - Send /newbot and follow the steps
      - BotFather gives you a token that looks like:
        123456789:AAExampleToken-Not-Real1234567890
      - Paste it into BOT_TOKEN below.

   2) Get your chat ID (where messages should arrive)
      - Message @userinfobot (or @getidsbot) on Telegram — it
        will reply with your numeric ID, e.g. 123456789.
      - If you want messages in a group instead, add your bot to
        that group and use the group's chat ID (usually negative,
        e.g. -1001234567890). You can get it via @RawDataBot.
      - Paste the ID into CHAT_ID below.

   3) IMPORTANT — start a chat with your own bot
      Telegram bots cannot message a user who has never
      messaged them first. Open your bot in Telegram and press
      "Start" / send it any message once. This step is required
      or messages will silently fail with a "chat not found" error.

   4) Save this file and re-upload it to GitHub Pages (or just
      commit + push if you use git). No other setup is required.

   ⚠️ SECURITY NOTE
   Because there is no backend, the bot token below is visible to
   anyone who views your site's source code. The realistic risk is
   low (the token can only be used to send messages as this bot —
   it can't read your other Telegram data), but to keep exposure
   low:
     - Use a bot created only for this contact form, not one you
       use elsewhere.
     - If you ever suspect abuse (spam messages appearing in your
       chat), message @BotFather, choose this bot, and select
       "Revoke current token" — then update BOT_TOKEN here with
       the new one.
   ============================================================ */

const TELEGRAM_CONFIG = {
  // Paste the token you got from @BotFather
  BOT_TOKEN: 'YOUR_BOT_TOKEN_HERE',

  // Paste your numeric Telegram user ID (or group chat ID)
  CHAT_ID: 'YOUR_CHAT_ID_HERE',

  // Flip to false to hide the contact form entirely and show the
  // contact methods (email/LinkedIn/GitHub) only.
  ENABLED: true
};
