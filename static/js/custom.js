function setGlobalColorTheme(themeMode, color) {
    const themes = {
        Violate: {
            light: {
                radius: "0.5rem",
                background: "oklch(1 0 0)",
                foreground: "oklch(0.141 0.005 285.823)",
                card: "oklch(1 0 0)",
                cardForeground: "oklch(0.141 0.005 285.823)",
                popover: "oklch(1 0 0)",
                popoverForeground: "oklch(0.141 0.005 285.823)",
                primary: "oklch(0.606 0.25 292.717)",
                primaryForeground: "oklch(0.969 0.016 293.756)",
                secondary: "oklch(0.967 0.001 286.375)",
                secondaryForeground: "oklch(0.21 0.006 285.885)",
                muted: "oklch(0.967 0.001 286.375)",
                mutedForeground: "oklch(0.552 0.016 285.938)",
                accent: "oklch(0.967 0.001 286.375)",
                accentForeground: "oklch(0.21 0.006 285.885)",
                destructive: "oklch(0.577 0.245 27.325)",
                border: "oklch(0.92 0.004 286.32)",
                input: "oklch(0.92 0.004 286.32)",
                ring: "oklch(0.606 0.25 292.717)",
                sidebar: "oklch(0.985 0 0)",
                sidebarForeground: "oklch(0.141 0.005 285.823)",
                sidebarPrimary: "oklch(0.606 0.25 292.717)",
                sidebarPrimaryForeground: "oklch(0.969 0.016 293.756)",
                sidebarAccent: "oklch(0.967 0.001 286.375)",
                sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
                sidebarBorder: "oklch(0.92 0.004 286.32)",
                sidebarBing: "oklch(0.606 0.25 292.717)",
            },
            dark: {
                background: "oklch(0.141 0.005 285.823)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.21 0.006 285.885)",
                cardForeground: "oklch(0.985 0 0)",
                popover: "oklch(0.21 0.006 285.885)",
                popoverForeground: "oklch(0.985 0 0)",
                primary: "oklch(0.541 0.281 293.009)",
                primaryForeground: "oklch(0.969 0.016 293.756)",
                secondary: "oklch(0.274 0.006 286.033)",
                secondaryForeground: "oklch(0.985 0 0)",
                muted: "oklch(0.274 0.006 286.033)",
                mutedForeground: "oklch(0.705 0.015 286.067)",
                accent: "oklch(0.274 0.006 286.033)",
                accentForeground: "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "oklch(0.541 0.281 293.009)",
                sidebar: "oklch(0.21 0.006 285.885)",
                sidebarForeground: "oklch(0.985 0 0)",
                sidebarPrimary: "oklch(0.541 0.281 293.009)",
                sidebarPrimaryForeground: "oklch(0.969 0.016 293.756)",
                sidebarAccent: "oklch(0.274 0.006 286.033)",
                sidebarAccentForeground: "oklch(0.985 0 0)",
                sidebarBorder: "oklch(1 0 0 / 10%)",
                sidebarBing: "oklch(0.541 0.281 293.009)",
            },
        },
        Orange: {
            light: {
                radius: "0.5rem",
                background: "oklch(1 0 0)",
                foreground: "oklch(0.141 0.005 285.823)",
                card: "oklch(1 0 0)",
                cardForeground: "oklch(0.141 0.005 285.823)",
                popover: "oklch(1 0 0)",
                popoverForeground: "oklch(0.141 0.005 285.823)",
                primary: "oklch(0.705 0.213 47.604)",
                primaryForeground: "oklch(0.98 0.016 73.684)",
                secondary: "oklch(0.967 0.001 286.375)",
                secondaryForeground: "oklch(0.21 0.006 285.885)",
                muted: "oklch(0.967 0.001 286.375)",
                mutedForeground: "oklch(0.552 0.016 285.938)",
                accent: "oklch(0.967 0.001 286.375)",
                accentForeground: "oklch(0.21 0.006 285.885)",
                destructive: "oklch(0.577 0.245 27.325)",
                border: "oklch(0.92 0.004 286.32)",
                input: "oklch(0.92 0.004 286.32)",
                ring: "oklch(0.705 0.213 47.604)",
                sidebar: "oklch(0.985 0 0)",
                sidebarForeground: "oklch(0.141 0.005 285.823)",
                sidebarPrimary: "oklch(0.705 0.213 47.604)",
                sidebarPrimaryForeground: "oklch(0.98 0.016 73.684)",
                sidebarAccent: "oklch(0.967 0.001 286.375)",
                sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
                sidebarBorder: "oklch(0.92 0.004 286.32)",
                sidebarRing: "oklch(0.705 0.213 47.604)",
            },
            dark: {
                background: "oklch(0.141 0.005 285.823)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.21 0.006 285.885)",
                cardForeground: "oklch(0.985 0 0)",
                popover: "oklch(0.21 0.006 285.885)",
                popoverForeground: "oklch(0.985 0 0)",
                primary: "oklch(0.646 0.222 41.116)",
                primaryForeground: "oklch(0.98 0.016 73.684)",
                secondary: "oklch(0.274 0.006 286.033)",
                secondaryForeground: "oklch(0.985 0 0)",
                muted: "oklch(0.274 0.006 286.033)",
                mutedForeground: "oklch(0.705 0.015 286.067)",
                accent: "oklch(0.274 0.006 286.033)",
                accentForeground: "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "oklch(0.646 0.222 41.116)",
                sidebar: "oklch(0.21 0.006 285.885)",
                sidebarForeground: "oklch(0.985 0 0)",
                sidebarPrimary: "oklch(0.646 0.222 41.116)",
                sidebarPrimaryForeground: "oklch(0.98 0.016 73.684)",
                sidebarAccent: "oklch(0.274 0.006 286.033)",
                sidebarAccentForeground: "oklch(0.985 0 0)",
                sidebarBorder: "oklch(1 0 0 / 10%)",
                sidebarRing: "oklch(0.646 0.222 41.116)",
            },
        },
    }
    console.log(color, themeMode)
    const theme = themes[color][themeMode]
    if (!theme) {
        console.error(`Invalid theme or mode: ${color} - ${themeMode}`)
        return
    }
    for (const key in theme) {
        document.documentElement.style.setProperty(`--${key}`, theme[key])
    }
}

function showLoginModal() {
  const modal = document.getElementById('login-modal');

  modal.classList.remove('hidden');

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  };
}