import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { Button } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom"

import App from "./app"

function waitForElement(selector: any, callback: any) {
  let element = document.querySelector(selector)
  if (element) {
    callback(element)
    return
  }

  const observer = new MutationObserver((mutations, me) => {
    element = document.querySelector(selector)
    if (element) {
      callback(element)
      me.disconnect()
    }
  })

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  })
}

export async function injectControlPanel() {
  const querySelectorTargetElement = ".artdeco-tabs"
  await new Promise((resolve) => {
    waitForElement(querySelectorTargetElement, resolve)
  })
  const targetElement = document.querySelector(querySelectorTargetElement)

  if (targetElement) {
    const container = document.createElement("div")
    targetElement.appendChild(container)
    const shadowRoot = container.attachShadow({ mode: "open" })

    // Create an Emotion cache for the Shadow DOM
    const cache = createCache({ key: "my-custom-key", container: shadowRoot })

    // Render the MUI component inside the Shadow Root
    ReactDOM.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>,
      shadowRoot
    )
  } else {
    console.error("Target element for injecting the control panel not found.")
  }
}

// Invoke the function to inject the component
injectControlPanel()
