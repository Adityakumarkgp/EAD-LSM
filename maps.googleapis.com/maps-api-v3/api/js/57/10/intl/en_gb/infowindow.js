google.maps.__gjsload__("infowindow", function (_) {
  var jO = function (a) {
      return !!a.infoWindow.get("logAsInternal");
    },
    nMa = function (a, b) {
      if (a.Eg.size === 1) {
        const c = Array.from(a.Eg.values())[0];
        c.lu !== b.lu && (c.set("map", null), a.Eg.delete(c));
      }
      a.Eg.add(b);
    },
    pMa = function (a, b) {
      var c = a.__gm;
      a = c.get("panes");
      c = c.get("innerContainer");
      b = { ql: a, wj: _.yA.wj(), Xv: c, shouldFocus: b };
      return new oMa(b);
    },
    kO = function (a, b) {
      a.gh.style.visibility = b ? "" : "hidden";
      b && a.shouldFocus && (a.focus(), (a.shouldFocus = !1));
      b ? qMa(a) : (a.Pg = !1);
    },
    rMa = function (a) {
      a.Hi.setAttribute("aria-labelledby", a.Kg.id);
    },
    sMa = function (a) {
      const b = !!a.get("open");
      var c = a.get("content");
      c = b ? c : null;
      if (c == a.Ig) kO(a, b && a.get("position"));
      else {
        if (a.Ig) {
          const d = a.Ig.parentNode;
          d == a.Eg && d.removeChild(a.Ig);
        }
        c && ((a.Ng = !1), a.Eg.appendChild(c));
        kO(a, b && a.get("position"));
        a.Ig = c;
        lO(a);
      }
    },
    mO = function (a) {
      var b = !!a.get("open"),
        c = a.get("headerContent");
      const d = !!a.get("ariaLabel"),
        e = !a.get("headerDisabled");
      b = b ? c : null;
      a.Hi.style.paddingTop = e ? "0" : "12px";
      b === a.Jg
        ? (a.Gg.style.display = e ? "" : "none")
        : (a.Jg && ((c = a.Jg.parentNode), c === a.Kg && c.removeChild(a.Jg)),
          b && ((a.Ng = !1), a.Kg.appendChild(b), e && !d && rMa(a)),
          (a.Gg.style.display = e ? "" : "none"),
          (a.Jg = b),
          lO(a));
    },
    lO = function (a) {
      var b = a.getSize();
      if (b) {
        var c = b.Pl;
        b = b.minWidth;
        a.Hi.style.maxWidth = _.Ot(c.width);
        a.Hi.style.maxHeight = _.Ot(c.height);
        a.Hi.style.minWidth = _.Ot(b);
        a.Eg.style.maxHeight = _.Wn.Eg
          ? _.Ot(c.height - 18)
          : _.Ot(c.height - 36);
        nO(a);
        a.Mg.start();
      }
    },
    tMa = function (a) {
      const b = a.get("pixelOffset") || new _.Xl(0, 0);
      var c = new _.Xl(a.Hi.offsetWidth, a.Hi.offsetHeight);
      a = -b.height + c.height + 11 + 60;
      let d = b.height + 60;
      const e = -b.width + c.width / 2 + 60;
      c = b.width + c.width / 2 + 60;
      b.height < 0 && (d -= b.height);
      return { top: a, bottom: d, left: e, right: c };
    },
    qMa = function (a) {
      !a.Pg &&
        a.get("open") &&
        a.get("visible") &&
        a.get("position") &&
        (_.Ok(a, "visible"), (a.Pg = !0));
    },
    nO = function (a) {
      var b = a.get("position");
      if (b && a.get("pixelOffset")) {
        var c = tMa(a);
        const d = b.x - c.left,
          e = b.y - c.top,
          f = b.x + c.right;
        c = b.y + c.bottom;
        _.ku(a.anchor, b);
        b = a.get("zIndex");
        _.mu(a.gh, _.nj(b) ? b : e + 60);
        a.set("pixelBounds", _.bn(d, e, f, c));
      }
    },
    vMa = function (a, b, c) {
      return b instanceof _.Yk ? new uMa(a, b, c) : new uMa(a, b);
    },
    xMa = function (a) {
      a.Eg &&
        a.ki.push(
          _.Lk(a.Eg, "pixelposition_changed", () => {
            wMa(a);
          })
        );
    },
    wMa = function (a) {
      const b =
        a.model.get("pixelPosition") || (a.Eg && a.Eg.get("pixelPosition"));
      a.Ig.set("position", b);
    },
    zMa = function (a) {
      a = a.__gm;
      a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new yMa());
      return a.get("IW_AUTO_CLOSER");
    },
    yMa = class {
      constructor() {
        this.Eg = new Set();
      }
    };
  var oMa = class extends _.Sk {
    constructor(a) {
      super();
      this.Ig = this.Jg = this.Og = null;
      this.Pg = this.Ng = !1;
      this.Xv = a.Xv;
      this.shouldFocus = a.shouldFocus;
      this.gh = document.createElement("div");
      this.gh.style.cursor = "default";
      this.gh.style.position = "absolute";
      this.gh.style.left = this.gh.style.top = "0";
      a.ql.floatPane.appendChild(this.gh);
      this.anchor = _.lu("div", this.gh);
      this.Lg = _.lu("div", this.anchor);
      this.Hi = _.lu("div", this.Lg);
      this.Hi.setAttribute("role", "dialog");
      this.Hi.tabIndex = -1;
      this.Gg = _.lu("div", this.Hi);
      this.Kg = _.lu("div", this.Gg);
      this.Sg = _.lu("div", this.Lg);
      this.Eg = _.lu("div", this.Hi);
      _.dDa(this.gh);
      _.fu(this.Hi, "gm-style-iw");
      _.fu(this.anchor, "gm-style-iw-a");
      _.fu(this.Lg, "gm-style-iw-t");
      _.fu(this.Sg, "gm-style-iw-tc");
      _.fu(this.Hi, "gm-style-iw-c");
      _.fu(this.Gg, "gm-style-iw-chr");
      _.fu(this.Kg, "gm-style-iw-ch");
      _.fu(this.Eg, "gm-style-iw-d");
      this.Kg.setAttribute("id", _.Cp());
      _.Wn.Eg &&
        !_.Wn.Lg &&
        ((this.Hi.style.paddingInlineEnd = "0"),
        (this.Hi.style.paddingBottom = "0"),
        (this.Eg.style.overflow = "scroll"));
      kO(this, !1);
      _.Hk(this.gh, "mousedown", _.yk);
      _.Hk(this.gh, "mouseup", _.yk);
      _.Hk(this.gh, "mousemove", _.yk);
      _.Hk(this.gh, "pointerdown", _.yk);
      _.Hk(this.gh, "pointerup", _.yk);
      _.Hk(this.gh, "pointermove", _.yk);
      _.Hk(this.gh, "dblclick", _.yk);
      _.Hk(this.gh, "click", _.yk);
      _.Hk(this.gh, "touchstart", _.yk);
      _.Hk(this.gh, "touchend", _.yk);
      _.Hk(this.gh, "touchmove", _.yk);
      _.Rt(this.gh, "contextmenu", this, this.Rg);
      _.Rt(this.gh, "wheel", this, _.yk);
      _.Rt(this.gh, "mousewheel", this, _.vk);
      _.Rt(this.gh, "MozMousePixelScroll", this, _.vk);
      this.Fg = new _.aA({
        Vp: new _.Vl(12, 12),
        hr: new _.Xl(24, 24),
        offset: new _.Vl(-6, -6),
        Uz: !0,
        ownerElement: this.Gg,
      });
      this.Gg.appendChild(this.Fg.element);
      _.Hk(this.Fg.element, "click", (b) => {
        _.yk(b);
        _.Ok(this, "closeclick");
        this.set("open", !1);
      });
      this.Mg = new _.En(() => {
        !this.Ng &&
          this.get("content") &&
          this.get("visible") &&
          (_.Ok(this, "domready"), (this.Ng = !0));
      }, 0);
      this.Qg = _.Hk(this.gh, "keydown", (b) => {
        (b.key !== "Escape" && b.key !== "Esc") ||
          !this.Hi.contains(document.activeElement) ||
          (b.stopPropagation(), _.Ok(this, "closeclick"), this.set("open", !1));
      });
    }
    ariaLabel_changed() {
      const a = this.get("ariaLabel");
      a
        ? this.Hi.setAttribute("aria-label", a)
        : (this.Hi.removeAttribute("aria-label"),
          this.get("headerDisabled") || rMa(this));
    }
    open_changed() {
      sMa(this);
      mO(this);
    }
    headerContent_changed() {
      mO(this);
    }
    headerDisabled_changed() {
      mO(this);
    }
    content_changed() {
      sMa(this);
    }
    pendingFocus_changed() {
      this.get("pendingFocus") &&
        (this.get("open") && this.get("visible") && this.get("position")
          ? _.ho(this.Hi, !0)
          : console.warn(
              "Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."
            ),
        this.set("pendingFocus", !1));
    }
    dispose() {
      setTimeout(() => {
        (document.activeElement && document.activeElement !== document.body) ||
          (this.Og && this.Og !== document.body
            ? _.ho(this.Og, !0) || _.ho(this.Xv, !0)
            : _.ho(this.Xv, !0));
      });
      this.Qg && _.Ck(this.Qg);
      this.gh.parentNode.removeChild(this.gh);
      this.Mg.stop();
      this.Mg.dispose();
    }
    getSize() {
      var a = this.get("layoutPixelBounds"),
        b = this.get("pixelOffset");
      const c = this.get("maxWidth") || 648,
        d = this.get("minWidth") || 0;
      if (!b) return null;
      a
        ? ((b = a.maxY - a.minY - (11 + -b.height)),
          (a = a.maxX - a.minX - 6),
          a >= 240 && (a -= 120),
          b >= 240 && (b -= 120))
        : ((a = 648), (b = 654));
      a = Math.min(a, c);
      a = Math.max(d, a);
      a = Math.max(0, a);
      b = Math.max(0, b);
      return { Pl: new _.Xl(a, b), minWidth: d };
    }
    pixelOffset_changed() {
      const a = this.get("pixelOffset") || new _.Xl(0, 0);
      this.Lg.style.right = _.Ot(-a.width);
      this.Lg.style.bottom = _.Ot(-a.height + 11);
      lO(this);
    }
    layoutPixelBounds_changed() {
      lO(this);
    }
    position_changed() {
      this.get("position")
        ? (nO(this), kO(this, !!this.get("open")))
        : kO(this, !1);
    }
    zIndex_changed() {
      nO(this);
    }
    visible_changed() {
      this.gh.style.display = this.get("visible") ? "" : "none";
      this.Mg.start();
      if (this.get("visible")) {
        const a = this.Fg.element.style.display;
        this.Fg.element.style.display = "none";
        this.Fg.element.getBoundingClientRect();
        this.Fg.element.style.display = a;
        qMa(this);
      } else this.Pg = !1;
    }
    Rg(a) {
      let b = !1;
      const c = this.get("content");
      let d = a.target;
      for (; !b && d; ) (b = d == c), (d = d.parentNode);
      b ? _.vk(a) : _.xk(a);
    }
    focus() {
      this.Og = document.activeElement;
      let a;
      _.Wn.Mg && (a = this.Eg.getBoundingClientRect());
      if (this.get("disableAutoPan")) _.ho(this.Hi, !0);
      else {
        var b = _.yu(this.Eg);
        if (b.length) {
          b = b[0];
          a = a || this.Eg.getBoundingClientRect();
          var c = b.getBoundingClientRect();
          _.ho(c.bottom <= a.bottom && c.right <= a.right ? b : this.Hi, !0);
        } else _.ho(this.Fg.element, !0);
      }
    }
  };
  var uMa = class {
    constructor(a, b, c) {
      this.model = a;
      this.isOpen = !0;
      this.Eg = this.Gg = this.kh = null;
      this.ki = [];
      var d = a.get("shouldFocus");
      this.Ig = pMa(b, d);
      const e = b.__gm;
      (d = b instanceof _.Yk) && c
        ? c.then((h) => {
            this.isOpen &&
              ((this.kh = h),
              (this.Eg = new _.CK((k) => {
                this.Gg = new _.Vz(b, h, k, () => {});
                h.Bi(this.Gg);
                return this.Gg;
              })),
              this.Eg.bindTo("latLngPosition", a, "position"),
              xMa(this));
          })
        : ((this.Eg = new _.CK()),
          this.Eg.bindTo("latLngPosition", a, "position"),
          this.Eg.bindTo("center", e, "projectionCenterQ"),
          this.Eg.bindTo("zoom", e),
          this.Eg.bindTo("offset", e),
          this.Eg.bindTo("projection", b),
          this.Eg.bindTo("focus", b, "position"),
          xMa(this));
      this.Jg = d ? (jO(a) ? "Ia" : "Id") : null;
      this.Kg = d ? (jO(a) ? 148284 : 148285) : null;
      const f = new _.DK(["scale"], "visible", (h) => h == null || h >= 0.3);
      this.Eg && f.bindTo("scale", this.Eg);
      const g = this.Ig;
      g.set("logAsInternal", jO(a));
      g.bindTo("ariaLabel", a);
      g.bindTo("zIndex", a);
      g.bindTo("layoutPixelBounds", e, "pixelBounds");
      g.bindTo("disableAutoPan", a);
      g.bindTo("pendingFocus", a);
      g.bindTo("maxWidth", a);
      g.bindTo("minWidth", a);
      g.bindTo("content", a);
      g.bindTo("headerContent", a);
      g.bindTo("headerDisabled", a);
      g.bindTo("pixelOffset", a);
      g.bindTo("visible", f);
      this.Fg = new _.En(() => {
        if (b instanceof _.Yk)
          if (this.kh) {
            var h = a.get("position");
            h && _.bga(b, this.kh, new _.rl(h), tMa(g));
          } else
            c.then(() => {
              this.Fg.start();
            });
        else
          (h = g.get("pixelBounds"))
            ? _.Ok(e, "pantobounds", h)
            : this.Fg.start();
      }, 150);
      if (d) {
        let h = null;
        this.ki.push(
          _.Lk(a, "position_changed", () => {
            const k = a.get("position");
            !k ||
              a.get("disableAutoPan") ||
              k.equals(h) ||
              (this.Fg.start(), (h = k));
          })
        );
      } else a.get("disableAutoPan") || this.Fg.start();
      g.set("open", !0);
      this.ki.push(
        _.Ak(g, "domready", () => {
          a.trigger("domready");
        })
      );
      this.ki.push(
        _.Ak(g, "visible", () => {
          a.trigger("visible");
        })
      );
      this.ki.push(
        _.Ak(g, "closeclick", () => {
          a.close();
          a.trigger("closeclick");
        })
      );
      this.ki.push(
        _.Lk(a, "pixelposition_changed", () => {
          wMa(this);
        })
      );
      this.Jg && _.Ll(b, this.Jg);
      this.Kg && _.L(b, this.Kg);
    }
    close() {
      if (this.isOpen) {
        this.isOpen = !1;
        this.model.trigger("close");
        for (var a of this.ki) _.Ck(a);
        this.ki.length = 0;
        this.Fg.stop();
        this.Fg.dispose();
        this.kh && this.Gg && this.kh.wm(this.Gg);
        a = this.Ig;
        a.unbindAll();
        a.set("open", !1);
        a.dispose();
        this.Eg && this.Eg.unbindAll();
      }
    }
  };
  _.pk("infowindow", {
    dF: function (a) {
      let b = null;
      _.Lk(a, "map_changed", function d() {
        const e = a.get("map");
        b && (b.bB.Eg.delete(a), b.ZI.close(), (b = null));
        if (e) {
          const f = e.__gm;
          f.get("panes")
            ? f.get("innerContainer")
              ? ((b = {
                  ZI: vMa(
                    a,
                    e,
                    e instanceof _.Yk ? f.Fg.then(({ kh: g }) => g) : void 0
                  ),
                  bB: zMa(e),
                }),
                nMa(b.bB, a))
              : _.Kk(f, "innercontainer_changed", d)
            : _.Kk(f, "panes_changed", d);
        }
      });
    },
  });
});
