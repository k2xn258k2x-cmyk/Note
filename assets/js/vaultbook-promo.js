  // vaultbook-promo.js
(function () {
  function getVaultBookConfig() {
    const url = window.location.href;

	// Example 1: completely HIDE on the Buy page itself AND on the homepage
	if (
	  url.indexOf(&#39;/2022/02/buy-vaultbook-premium-offline-notebook.html&#39;) !== -1 ||
	  url === &#39;https://www.vaultbook.net/&#39; ||          // desktop home
	  url === &#39;https://www.vaultbook.net/?m=1&#39;         // mobile home
	) {
	  return { hide: true };
	}

    // Example 2: special text on tag/label page
    if (url.indexOf(&#39;/search/label/vaultbook&#39;) !== -1) {
      return {
        label: &#39;VaultBook for power users:&#39;,
        text: &#39;Work with sensitive datasets, research notes, and docs in a single encrypted, offline notebook built for professionals.&#39;
      };
    }

    // Example 3: special text on a hypothetical &#8220;support&#8221; page
    if (url.indexOf(&#39;/p/contact-vaultbook-support.html&#39;) !== -1) {
      return {
        label: &#39;Contact us:&#39;,
        text: &#39;Let us know about your experience and how we can improve. Make sure you are using the latest release of VaultBook. Download below.&#39;
      };
    }

    // Default for all other URLs
    return {
      label: &#39;VaultBook:&#39;,
      text: &#39;Capture sensitive notes, research, and files in a private, offline notebook. Your data stays on your device with AES-GCM protection and no mandatory cloud sync.&#39;
    };
  }

  // &#9472;&#9472;&#9472; Main injector &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;
  function injectVaultBookPromo() {
    const cfg = getVaultBookConfig();
    if (!cfg || cfg.hide) return;          // hide completely for some URLs

    const labelText = cfg.label || &#39;VaultBook:&#39;;
    const bodyText  = cfg.text  || &#39;&#39;;

    // Inject CSS once
    if (!document.getElementById(&#39;vb-promo-style&#39;)) {
      const style = document.createElement(&#39;style&#39;);
      style.id = &#39;vb-promo-style&#39;;
      style.textContent = `
        .vb-promo {
          margin: 0 0 18px 0;
          padding: 14px 18px;
          border-radius: 14px;
          border: 1px solid #d0e2ff;
          background: linear-gradient(180deg, #f5f7ff, #eef4ff);
          box-shadow: 0 10px 25px rgba(15,23,42,0.06);
          font-family: system-ui,-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,sans-serif;
          color: #111827;
          font-size: 14px;
          line-height: 1.5;
        }
        .vb-promo-main {
          margin-bottom: 10px;
        }
        .vb-promo-label {
          font-weight: 600;
          color: #2563eb;
        }
        .vb-promo-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .vb-promo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none !important;
          border: 1px solid transparent;
          cursor: pointer;
          white-space: nowrap;
        }
        .vb-promo-btn-primary {
          background: #2563eb;
          color: #ffffff;
          border-color: #1d4ed8;
        }
        .vb-promo-btn-secondary {
          background: #ffffff;
          color: #1e293b;
          border-color: #cbd5e1;
        }
        .vb-promo-btn-primary:hover {
          background: #1d4ed8;
        }
        .vb-promo-btn-secondary:hover {
          background: #f1f5f9;
        }
      `;
      document.head.appendChild(style);
    }

    const container = document.querySelector(&#39;.post-body&#39;) || document.body;
    if (!container) return;
    if (container.querySelector(&#39;.vb-promo&#39;)) return;

    const wrap = document.createElement(&#39;div&#39;);
    wrap.className = &#39;vb-promo&#39;;
    wrap.innerHTML = `
      <div class='vb-promo-main'>
        <span class='vb-promo-label'>${labelText}</span>
        ${bodyText}
      </div>
      <div class='vb-promo-actions'>
        <a class='vb-promo-btn vb-promo-btn-primary' href='https://www.vaultbook.net/2022/02/buy-vaultbook-premium-offline-notebook.html' rel='noopener' target='_blank'>
          🔐 Buy Now
        </a>
        <a class='vb-promo-btn vb-promo-btn-secondary' href='https://github.com/k2xn258k2x-cmyk/Note/raw/refs/heads/main/VaultBook_Pro.zip' rel='noopener' target='_blank'>
          &#11015;&#65039; Download
        </a>
        <a class='vb-promo-btn vb-promo-btn-secondary' href='https://www.vaultbook.net/p/faq.html' rel='noopener' target='_blank'>
          💡 FAQ
        </a>	
        <a class='vb-promo-btn vb-promo-btn-secondary' href='https://www.vaultbook.net/2022/01/vaultbook-vs-others.html' rel='noopener' target='_blank'>
          🆚 Compare
        </a>			   	   
      </div>
    `;
    container.insertBefore(wrap, container.firstChild);
  }

  if (document.readyState === &#39;loading&#39;) {
    document.addEventListener(&#39;DOMContentLoaded&#39;, injectVaultBookPromo);
  } else {
    injectVaultBookPromo();
  }
})();