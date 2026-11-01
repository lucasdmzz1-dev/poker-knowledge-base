(function () {
  var PKB = (window.PKB = window.PKB || {});

  PKB.store = {
    get: function (k, d) {
      try {
        var v = localStorage.getItem(k);
        return v ? JSON.parse(v) : d;
      } catch (e) {
        return d;
      }
    },
    set: function (k, v) {
      try {
        localStorage.setItem(k, JSON.stringify(v));
      } catch (e) {}
    },
  };

  PKB.SUITS = { s: "♠", h: "♥", d: "♦", c: "♣" };
  PKB.SUIT_NAMES = { s: "espadas", h: "copas", d: "ouros", c: "paus" };

  PKB.cardHTML = function (code, size) {
    var r = code.charAt(0);
    var s = code.charAt(1);
    var label = r + " de " + PKB.SUIT_NAMES[s];
    return (
      '<span class="card s-' + s + (size ? " card-" + size : "") + '" role="img" aria-label="' + label + '">' +
      '<span class="card-r">' + r + "</span>" +
      '<span class="card-s" aria-hidden="true">' + PKB.SUITS[s] + "</span>" +
      "</span>"
    );
  };

  PKB.cardsHTML = function (codes, size) {
    return codes
      .map(function (c) {
        return PKB.cardHTML(c, size);
      })
      .join("");
  };

  PKB.rng = function () {
    var a = new Uint32Array(1);
    window.crypto.getRandomValues(a);
    return (a[0] % 100) + 1;
  };

  PKB.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = PKB.rng() % (i + 1);
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  };

  PKB.stripHTML = function (bucket, rng, size) {
    var cells = "";
    for (var n = 1; n <= 100; n++) {
      var bet = n <= bucket;
      var cls = "strip-c " + (bet ? "is-bet" : "is-check") + (rng === n ? " is-now" : "");
      cells += '<i class="' + cls + '"></i>';
    }
    return (
      '<div class="strip-wrap">' +
      '<div class="strip" role="img" aria-label="De 1 a ' + bucket + " aposta " + (size || "") + ", de " + (bucket + 1) + ' a 100 dá check">' + cells + "</div>" +
      '<div class="strip-legend"><span><b class="dot dot-bet"></b>1 a ' + bucket + ": aposta" + (size ? " " + size : "") + "</span>" +
      (bucket < 100 ? '<span><b class="dot dot-check"></b>' + (bucket + 1) + " a 100: check</span>" : "") +
      "</div></div>"
    );
  };

  PKB.renderNav = function (active) {
    var base = document.body.getAttribute("data-base") || "";
    var items = [
      ["teoria", "Teoria", "teoria/index.html"],
      ["pratica", "Prática", "pratica/index.html"],
      ["analise", "Análise", "analise/index.html"],
    ];
    var links = items
      .map(function (it) {
        return (
          '<a href="' + base + it[2] + '"' + (active === it[0] ? ' aria-current="page"' : "") + ">" + it[1] + "</a>"
        );
      })
      .join("");
    var el = document.getElementById("nav");
    if (!el) return;
    el.className = "top";
    el.innerHTML =
      '<div class="top-in"><a class="brand" href="' + base + 'index.html"><span class="brand-mark" aria-hidden="true">PK</span><span class="brand-text">Poker KB</span></a>' +
      '<nav aria-label="Áreas">' + links + "</nav></div>";
  };

  PKB.remember = function (href, label) {
    PKB.store.set("pkb:last", { href: href, label: label });
  };
})();
