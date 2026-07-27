# GreatmanTakit EXPOSED 💌

A fake scandal that becomes a bridesmaid invitation.

Visitors land on what looks like a scanned newspaper exposé about gospel
artist **GreatmanTakit** — blurred, classified, irresistible. Seconds later a
plot-twist modal admits the truth: there is no scandal. **Princess-Iman** has
something beautiful to ask. The paper folds away, petals fall, and each
bridesmaid finds a sealed envelope with her name on it.

## The experience

1. **The newspaper** — full-viewport fake front page, heavy blur, hover the
   headline to catch it flicker from *EXPOSED* to *PROPOSED*.
2. **Psych! Gotcha.** — a classified-document modal with a pastel
   glassmorphism gradient appears after 500ms.
3. **The fold** — a GSAP timeline lifts the blur, colours the photo, and
   folds the newspaper upward like paper. The background warms from cream to
   ivory and petals begin to drift.
4. **The envelopes** — seven hand-built paper envelopes with wax seals,
   idle float, hover lift, and a shine sweep across the seal.
5. **The letter** — a two-second opening ceremony (flap unfolds, seal
   breaks, paper slides out), then an editorial photo–letter–photo spread.
6. **The yes** — confetti, petals, sparkles, *"I'm so happy!!"*, and a
   redirect into the WhatsApp group chat.

## Stack

React · Vite · TypeScript · TailwindCSS v4 · Framer Motion · GSAP

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
```

## Personalising

Everything lives in [`src/data/bridesmaids.ts`](src/data/bridesmaids.ts):

- **Letters** — each entry has a `greeting` (defaults to her name), a list
  of `paragraphs`, the big `ask`, and an `acceptLabel` for the button, so
  every letter can be completely her own (bridesmaid, maid of honor, ...).
- **WhatsApp group** — replace `GROUP_LINK` with the real invite link.
- **Photos** — drop images into `public/photos/` and set each photo's
  `src` (e.g. `"/photos/ellie-1.jpg"`). Each bridesmaid can have 1–4
  photos, split across the two columns beside her letter. Until the files
  exist, elegant colour-matched placeholders render instead.

### Personalised links

Send each bridesmaid her own URL:

```
https://greatmantakitexposed.xyz/?for=amara
```

With `?for=` set, only her envelope opens — clicking anyone else's makes it
shake and whisper *"That's not yours 😊"*. Without the parameter every
envelope opens (handy for previewing).

---

*greatmantakitexposed.xyz — A love letter disguised as breaking news.
Made with ❤️ by Princess-Iman*
