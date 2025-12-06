//<![CDATA[
document.addEventListener('DOMContentLoaded', function () {

  // ─── URL-based config (EDIT THIS PART) ───────────────────────────────
  function getVaultBookConfig() {
    var url = window.location.href;

    // Example 1: completely HIDE on the Buy page itself AND on the homepage
    if (
      url.indexOf('/2022/02/buy-vaultbook-premium-offline-notebook.html') !== -1 ||
      url === 'https://www.vaultbook.net/' ||          // desktop home
      url === 'https://www.vaultbook.net/?m=1'         // mobile home
    ) {
      return { hide: true };
    }

    // Example 2: special text on tag/label page
    if (url.indexOf('/search/label/vaultbook') !== -1) {
      return {
        label: 'VaultBook for power users:',
        text: 'Work with sensitive datasets, research notes, and docs in a single encrypted, offline notebook built for professionals.'
      };
    }

    // Example 3: special text on a hypothetical “support” page
    if (url.indexOf('/p/contact-vaultbook-support.html') !== -1) {
      return {
        label: 'Contact us:',
        text: 'Let us know about your experience and how we can improve. Make sure you are using the latest release of VaultBook. Download below.'
      };
    }

    // Default for all other URLs
    return {
      label: 'VaultBook:',
      text: 'Capture sensitive notes, research, and files in a private, offline notebook. Your data stays on your device with AES-GCM protection and no mandatory cloud sync.'
    };
  }

  // ─── Main injector ───────────────────────────────────────────────────
  function injectVaultBookPromo() {
    var cfg = getVaultBookConfig();
    if (!cfg || cfg.hide) return;          // hide completely for some URLs

    var labelText = cfg.label || 'VaultBook:';
    var bodyText  = cfg.text  || '';

    // Inject CSS once
    if (!document.getElementById('vb-promo-style')) {
      var style = document.createElement('style');
      style.id = 'vb-promo-style';
      style.textContent =
        '.vb-promo {' +
        '  margin: 0 0 18px 0;' +
        '  padding: 14px 18px;' +
        '  border-radius: 14px;' +
        '  border: 1px solid #d0e2ff;' +
        '  background: linear-gradient(180deg, #f5f7ff, #eef4ff);' +
        '  box-shadow: 0 10px 25px rgba(15,23,42,0.06);' +
        '  font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;' +
        '  color: #111827;' +
        '  font-size: 14px;' +
        '  line-height: 1.5;' +
        '}' +
        '.vb-promo-main { margin-bottom: 10px; }' +
        '.vb-promo-label { font-weight: 600; color: #2563eb; }' +
        '.vb-promo-actions { display:flex; flex-wrap:wrap; gap:8px; }' +
        '.vb-promo-btn {' +
        '  display:inline-flex; align-items:center; justify-content:center;' +
        '  padding:4px 10px; border-radius:999px; font-size:12px; font-weight:600;' +
        '  text-decoration:none !important; border:1px solid transparent; cursor:pointer; white-space:nowrap;' +
        '}' +
        '.vb-promo-btn-primary { background:#2563eb; color:#ffffff; border-color:#1d4ed8; }' +
        '.vb-promo-btn-secondary { background:#ffffff; color:#1e293b; border-color:#cbd5e1; }' +
        '.vb-promo-btn-primary:hover { background:#1d4ed8; }' +
        '.vb-promo-btn-secondary:hover { background:#f1f5f9; }';
      document.head.appendChild(style);
    }

    var container = document.querySelector('.post-body') || document.body;
    if (!container) return;
    if (container.querySelector('.vb-promo')) return;

    var wrap = document.createElement('div');
    wrap.className = 'vb-promo';
    wrap.innerHTML =
      '<div class="vb-promo-main">' +
        '<span class="vb-promo-label">' + labelText + '</span> ' +
        bodyText +
      '</div>' +
      '<div class="vb-promo-actions">' +
        '<a class="vb-promo-btn vb-promo-btn-primary" ' +
          'href="https://www.vaultbook.net/2022/02/buy-vaultbook-premium-offline-notebook.html" ' +
          'target="_blank" rel="noopener">' +
          '🔐 Buy Now' +
        '</a>' +
        '<a class="vb-promo-btn vb-promo-btn-secondary" ' +
          'href="https://store-na-phx-1.gofile.io/download/direct/8e925b8c-a871-4e30-9500-671b03764676/VaultBook_Pro.zip" ' +
          'target="_blank" rel="noopener">' +
          '⬇️ Download' +
        '</a>' +
        '<a class="vb-promo-btn vb-promo-btn-secondary" ' +
          'href="https://www.vaultbook.net/p/faq.html" ' +
          'target="_blank" rel="noopener">' +
          '💡 FAQ' +
        '</a>' +
        '<a class="vb-promo-btn vb-promo-btn-secondary" ' +
          'href="https://www.vaultbook.net/2022/01/vaultbook-vs-others.html" ' +
          'target="_blank" rel="noopener">' +
          '🆚 Compare' +
        '</a>' +
      '</div>';

    container.insertBefore(wrap, container.firstChild);
  }

  injectVaultBookPromo();

});
//]]>
