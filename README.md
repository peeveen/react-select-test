# Demo App

1) Run and launch app (localhost:3000)
2) Scroll to bottom of modal
3) Open menu on select controls at the foot of the modal
- Some menus are impossible to get the mouse onto
- Some menus change size as the mouse moves over the options

In the code, if you change this line:

```typescript
theme: {(theme) => ({...theme})}
```

to:

```typescript
theme: {(theme) => theme}
```

... (or remove the line entirely) ...

... _then the problem goes away!_ 😮