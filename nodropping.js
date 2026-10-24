import {_ as jt} from "../chunks/Dp1pzeXC.js";
import "../chunks/Bzak7iHL.js";
import {O as Kt, Q as Qt, R as Zt, a as r, F as te, G as F, T as ee, B as ne, H as K, U as Bt, I as G, $ as oe, J as Y, K as ae, M as se, N as j, X as rt, s as lt} from "../chunks/CCF4F0TT.js";
import {i as ie} from "../chunks/LEtRTZSW.js";
import {h as re} from "../chunks/QjkSI_cX.js";
import {b as le} from "../chunks/Bp8iKzpc.js";
import {G as ce} from "../chunks/CWhT4PB9.js";
import {F as de} from "../chunks/CHP4vrAo.js";
import {G as fe} from "../chunks/Ce00mDVY.js";
var ue = K('<meta name="description" content="sort 10 bars by hand. physics is on. they fall over."/>')
  , ve = K('<div class="setup svelte-zdslg9"><!> <p class="rules svelte-zdslg9">drag the bars into order, left to right.<br/>only bars standing on the floor count. the rest fell off.</p> <button class="start-btn svelte-zdslg9">start</button></div>')
  , me = K('<div class="game-wrap svelte-zdslg9"><div class="canvas-fill svelte-zdslg9"><canvas class="svelte-zdslg9"></canvas></div> <div class="btn-row svelte-zdslg9"><button class="back-btn svelte-zdslg9">again</button> <button class="back-btn svelte-zdslg9">back</button></div></div>')
  , he = K("<!> <!> <!>", 1);
function _e(Tt, Lt) {
    Qt(Lt, !0);
    let I = Bt("setup")
      , l = Bt(null)
      , O = null;
    Zt( () => {
        if (r(I) !== "playing" || !r(l))
            return;
        let m = !1
          , d = () => {}
        ;
        return jt( () => import("../chunks/C9mZcvcJ.js").then(u => u.m), [], import.meta.url).then(u => {
            m || (d = Rt(u.default || u))
        }
        ),
        () => {
            m = !0,
            d()
        }
    }
    );
    function Rt(m) {
        const {Engine: d, Bodies: u, Body: S, Composite: b, Constraint: T, Events: L, Query: Q, Sleeping: ut} = m
          , n = r(l).getContext("2d")
          , vt = r(l).parentElement
          , h = 1080
          , Z = 1920;
        let E = 1
          , tt = 0
          , et = 0
          , M = 1;
        function mt() {
            const t = vt.getBoundingClientRect();
            M = window.devicePixelRatio || 1,
            r(l).width = Math.round(t.width * M),
            r(l).height = Math.round(t.height * M),
            E = Math.min(t.width / h, t.height / Z),
            tt = (t.width - h * E) / 2,
            et = (t.height - Z * E) / 2
        }
        mt();
        const ht = new ResizeObserver(mt);
        ht.observe(vt);
        const N = document.documentElement.getAttribute("data-theme") === "dark"
          , Gt = N ? "#242424" : "#e3d9cb"
          , pt = N ? "#e8e4db" : "#2b2b2b"
          , It = N ? "#e8e4db" : "#ffffff"
          , gt = N ? "#8a847a" : "#c9c3b8"
          , Ot = "#da7757"
          , nt = "#4a9e6a"
          , C = "#8a847a"
          , bt = 100
          , R = 1500
          , k = 10
          , yt = 22
          , xt = 130
          , Nt = 650
          , P = (h - 2 * bt - 40 - (k - 1) * yt) / k
          , wt = [65.4, 73.4, 82.4, 98, 110]
          , $ = [131, 147, 165, 196, 220, 262, 294, 330, 392, 440];
        let y = null
          , V = null;
        function Ct() {
            y || (y = new AudioContext,
            V = y.createGain(),
            V.gain.value = 1,
            V.connect(y.destination))
        }
        function z(t, e, o, s, i=0) {
            if (!y)
                return;
            const a = y.currentTime + i
              , c = y.createOscillator()
              , f = y.createGain();
            c.type = o,
            c.frequency.value = t,
            f.gain.setValueAtTime(1e-4, a),
            f.gain.linearRampToValueAtTime(s, a + .008),
            f.gain.exponentialRampToValueAtTime(.001, a + e),
            c.connect(f),
            f.connect(V),
            c.start(a),
            c.stop(a + e + .02)
        }
        const Pt = t => z($[t * 2 % $.length], .09, "sine", .1)
          , $t = (t, e) => z($[t % $.length], .12, "triangle", Math.min(.16, .03 + e * .012))
          , Vt = t => {
            const e = wt[Math.random() * wt.length | 0];
            z(e, .32, "sine", Math.min(.32, .08 + t * .02)),
            z(e * 2, .12, "triangle", Math.min(.08, t * .006))
        }
          , Dt = () => [262, 330, 392, 523].forEach( (t, e) => z(t, .5, "sine", .16, e * .12));
        let x, g, D, v = null, w = !1, _ = !1, H = 0, A = 0, W = 0, p = null, ot = new Set, q = 0;
        const At = new Map;
        function Et() {
            x = d.create({
                enableSleeping: !0,
                positionIterations: 12,
                velocityIterations: 10
            }),
            x.gravity.y = 2.4,
            D = u.rectangle(h / 2, R + 100, h, 200, {
                isStatic: !0,
                friction: .9
            });
            const t = Array.from({
                length: k
            }, (o, s) => s + 1);
            do
                for (let o = k - 1; o > 0; o--) {
                    const s = Math.random() * (o + 1) | 0;
                    [t[o],t[s]] = [t[s], t[o]]
                }
            while (t.every( (o, s) => !s || o > t[s - 1]));
            const e = bt + 20 + P / 2;
            g = t.map( (o, s) => {
                const i = xt + (o - 1) / (k - 1) * (Nt - xt)
                  , a = u.rectangle(e + s * (P + yt), R - i / 2, P, i, {
                    friction: .55,
                    frictionStatic: .9,
                    restitution: .04,
                    density: .0018,
                    chamfer: {
                        radius: 3
                    }
                });
                return a.val = o,
                a.w = P,
                a.h = i,
                ut.set(a, !0),
                a
            }
            ),
            b.add(x.world, [D, ...g]),
            L.on(x, "collisionStart", o => {
                const s = performance.now();
                for (const i of o.pairs) {
                    const a = i.bodyA
                      , c = i.bodyB
                      , f = Math.hypot(a.velocity.x - c.velocity.x, a.velocity.y - c.velocity.y);
                    if (f < 2.2)
                        continue;
                    const X = a.val ? a : c;
                    !X.val || s - (At.get(X) || 0) < 70 || (At.set(X, s),
                    a === D || c === D ? Vt(f) : a.val && c.val && $t(X.val, f))
                }
            }
            ),
            v = null,
            w = !1,
            _ = !1,
            p = null,
            ot = new Set,
            A = 0,
            W = 0,
            q = 0
        }
        O = () => {
            v && B(),
            b.clear(x.world, !1),
            d.clear(x),
            Et()
        }
        ;
        function Mt(t) {
            const e = r(l).getBoundingClientRect()
              , o = t.touches ? t.touches[0] : t;
            return {
                x: (o.clientX - e.left - tt) / E,
                y: (o.clientY - e.top - et) / E
            }
        }
        function J(t) {
            if (Ct(),
            w || _)
                return;
            const e = Mt(t)
              , o = Q.point(g, e)[0];
            o && (t.preventDefault(),
            ut.set(o, !1),
            A || (A = performance.now()),
            v = {
                body: o,
                c: T.create({
                    pointA: e,
                    bodyB: o,
                    pointB: {
                        x: e.x - o.position.x,
                        y: e.y - o.position.y
                    },
                    angleB: o.angle,
                    stiffness: .12,
                    damping: .08,
                    length: 0
                })
            },
            b.add(x.world, v.c),
            r(l).style.cursor = "grabbing",
            Pt(o.val))
        }
        function U(t) {
            if (!v)
                return;
            t.preventDefault();
            const e = Mt(t);
            v.c.pointA = {
                x: Math.max(-200, Math.min(h + 200, e.x)),
                y: Math.max(-200, Math.min(R, e.y))
            }
        }
        function B() {
            v && (b.remove(x.world, v.c),
            v = null,
            r(l).style.cursor = "grab")
        }
        r(l).addEventListener("mousedown", J),
        window.addEventListener("mousemove", U),
        r(l).addEventListener("touchstart", J, {
            passive: !1
        }),
        window.addEventListener("touchmove", U, {
            passive: !1
        }),
        window.addEventListener("touchend", B);
        const Ht = t => t.vertices.some(e => e.y >= R - 4 && e.x >= 0 && e.x <= h)
          , Wt = () => g.filter(Ht).sort( (t, e) => t.bounds.min.x + t.bounds.max.x - (e.bounds.min.x + e.bounds.max.x));
        function qt(t) {
            if (w || _ || v || !A) {
                p = null;
                return
            }
            if (!g.length) {
                _ = !0,
                q = 0,
                H = t,
                W = (t - A) / 1e3;
                return
            }
            const e = Wt();
            if (!e.length || !e.every( (s, i) => !i || s.val > e[i - 1].val)) {
                p = null;
                return
            }
            const o = e.map(s => s.id).join();
            if (!p || p.ids !== o) {
                p = {
                    t,
                    ids: o,
                    s: e.map(s => ({
                        x: s.position.x,
                        y: s.position.y,
                        a: s.angle
                    }))
                };
                return
            }
            if (!(t - p.t < 300)) {
                if (!e.every( (s, i) => Math.hypot(s.position.x - p.s[i].x, s.position.y - p.s[i].y) < 6 && Math.abs(s.angle - p.s[i].a) < .05)) {
                    p = null;
                    return
                }
                w = !0,
                H = t,
                W = (p.t - A) / 1e3,
                ot = new Set(e),
                q = e.length,
                Dt()
            }
        }
        function Jt() {
            const t = g.filter(e => e.position.y > Z + 300);
            if (t.length) {
                for (const e of t)
                    v && v.body === e && B(),
                    b.remove(x.world, e);
                g = g.filter(e => !t.includes(e))
            }
        }
        function Ut() {
            for (const t of g) {
                const e = t.velocity
                  , o = Math.hypot(e.x, e.y);
                o > 38 && S.setVelocity(t, {
                    x: e.x * 38 / o,
                    y: e.y * 38 / o
                }),
                Math.abs(t.angularVelocity) > .45 && S.setAngularVelocity(t, Math.sign(t.angularVelocity) * .45)
            }
        }
        function Xt(t) {
            const e = t % 60;
            return t >= 60 ? `${Math.floor(t / 60)}:${e.toFixed(2).padStart(5, "0")}` : e.toFixed(2)
        }
        function Yt(t) {
            n.setTransform(1, 0, 0, 1, 0, 0),
            n.fillStyle = Gt,
            n.fillRect(0, 0, r(l).width, r(l).height),
            n.setTransform(M * E, 0, 0, M * E, M * tt, M * et);
            const e = w || _
              , o = e ? W : A ? (t - A) / 1e3 : 0;
            n.textAlign = "center",
            n.textBaseline = "alphabetic",
            n.fillStyle = w ? nt : _ ? C : A ? pt : C,
            n.font = '700 96px "JetBrains Mono", monospace',
            n.fillText(Xt(o), h / 2, 300),
            n.fillStyle = C,
            n.font = "400 38px Inter, sans-serif";
            const s = e ? q : g.length
              , i = `${s} ${s === 1 ? "bar" : "bars"} left`;
            n.fillText(A ? i : "grab a bar to start", h / 2, 370);
            for (const a of g) {
                const c = v && v.body === a
                  , f = w && ot.has(a);
                n.save(),
                n.translate(a.position.x, a.position.y),
                n.rotate(a.angle),
                n.fillStyle = f ? nt : c ? Ot : It,
                n.shadowColor = f ? "rgba(74,158,106,0.3)" : c ? "rgba(218,119,87,0.45)" : "rgba(0,0,0,0.05)",
                n.shadowBlur = c ? 20 : f ? 10 : 5,
                n.shadowOffsetY = 1,
                n.beginPath(),
                n.roundRect(-a.w / 2, -a.h / 2, a.w, a.h, 3),
                n.fill(),
                n.shadowBlur = 0,
                n.shadowOffsetY = 0,
                n.lineWidth = 1.5,
                n.strokeStyle = f ? "#2e6a46" : c ? "#c96a4c" : gt,
                n.stroke(),
                n.fillStyle = "rgba(22,19,22," + (f || c ? .45 : .32) + ")",
                n.font = '700 30px "JetBrains Mono", monospace',
                n.textAlign = "center",
                n.textBaseline = "middle",
                n.fillText(String(a.val), 0, a.h / 2 - 30),
                n.restore()
            }
            n.fillStyle = gt,
            n.fillRect(0, R, h, 2),
            (w || _) && (n.globalAlpha = Math.min(1, (t - H) / 150),
            n.textAlign = "center",
            n.textBaseline = "alphabetic",
            n.fillStyle = w ? nt : pt,
            n.font = "800 64px Inter, sans-serif",
            n.fillText(w ? "sorted." : "not this time.", h / 2, 1600),
            t - H > 450 && (n.fillStyle = C,
            n.font = "400 34px Inter, sans-serif",
            n.fillText(i, h / 2, 1655)),
            n.globalAlpha = 1)
        }
        const at = 1e3 / 120;
        let _t = performance.now()
          , st = 0
          , it = 0;
        function St(t) {
            st += Math.min(100, t - _t),
            _t = t;
            for (let e = 0; st >= at && e < 12; e++)
                Ut(),
                d.update(x, at),
                st -= at;
            Jt(),
            qt(t),
            Yt(t),
            it = requestAnimationFrame(St)
        }
        return r(l).style.cursor = "grab",
        Et(),
        it = requestAnimationFrame(St),
        () => {
            var t, e;
            cancelAnimationFrame(it),
            ht.disconnect(),
            O = null,
            (t = r(l)) == null || t.removeEventListener("mousedown", J),
            (e = r(l)) == null || e.removeEventListener("touchstart", J),
            window.removeEventListener("mousemove", U),
            window.removeEventListener("mouseup", B),
            window.removeEventListener("touchmove", U),
            window.removeEventListener("touchend", B),
            y && y.close()
        }
    }
    var ct = he();
    re("zdslg9", m => {
        var d = ue();
        ne( () => {
            oe.title = "gravity sort — swap."
        }
        ),
        F(m, d)
    }
    );
    var dt = te(ct);
    {
        var kt = m => {
            var d = ve()
              , u = Y(d);
            fe(u, {
                title: "gravity sort",
                center: !0,
                children: (b, T) => {
                    ae();
                    var L = se("sort them by hand. physics is on.");
                    F(b, L)
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var S = G(u, 4);
            j(d),
            rt("click", S, () => lt(I, "playing")),
            F(m, d)
        }
          , zt = m => {
            var d = me()
              , u = Y(d)
              , S = Y(u);
            le(S, Q => lt(l, Q), () => r(l)),
            j(u);
            var b = G(u, 2)
              , T = Y(b)
              , L = G(T, 2);
            j(b),
            j(d),
            rt("click", T, () => O && O()),
            rt("click", L, () => lt(I, "setup")),
            F(m, d)
        }
        ;
        ie(dt, m => {
            r(I) === "setup" ? m(kt) : m(zt, -1)
        }
        )
    }
    var ft = G(dt, 2);
    ce(ft, {});
    var Ft = G(ft, 2);
    de(Ft),
    F(Tt, ct),
    ee()
}
Kt(["click"]);
export {_e as component};
