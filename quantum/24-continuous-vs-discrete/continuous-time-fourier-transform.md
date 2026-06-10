**# Continuous-Time Fourier Transform (CTFT)

This is getting into the weeds of signal processing.

[[convolution|Convolution]] is very expensive. This is convolution

$$
(f * g)(t) \triangleq \int_{-\infty}^{\infty} f(\tau) \, g(t - \tau) \, d\tau
$$

Let $g(t)=e^{i\omega t}$

$$
(f * g)(t) = \int f(\tau) \, e^{i\omega(t-\tau)} \, d\tau = e^{i\omega t} \int f(\tau) \, e^{-i\omega \tau} \, d\tau
$$

We now call 

$$
\boxed{\tilde{f}(\omega) \triangleq \int_{-\infty}^{\infty} f(\tau) \, e^{-i\omega \tau} \, d\tau}
$$

So

$$
(f*e^{i\omega t})(t)=e^{i\omega t}\tilde{f}(\omega)
$$

The inverse of $\tilde{f}$ is

$$
\boxed{f(t) \triangleq \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) \, e^{i\omega t} \, d\omega}
$$

We can write

$$
f(t) \leftrightarrow \hat{f}(\omega)
$$

### Cheat sheet

$$
\delta(x) \leftrightarrow 1
$$

$$
1 \leftrightarrow 2\pi\,\delta(k)
$$

$$
e^{ik_0 x} \leftrightarrow 2\pi\,\delta(k - k_0)
$$

$$
\cos(k_0 x) \leftrightarrow \pi\big[\delta(k - k_0) + \delta(k + k_0)\big]
$$

$$
\sin(k_0 x) \leftrightarrow -i\pi\big[\delta(k - k_0) - \delta(k + k_0)\big]
$$

$$
e^{-a x^2} \leftrightarrow \sqrt{\tfrac{\pi}{a}}\, e^{-k^2/(4a)} \qquad (\text{Gaussian} \leftrightarrow \text{Gaussian})
$$

$$
e^{-a|x|} \leftrightarrow \frac{2a}{a^2 + k^2} \qquad (\text{Lorentzian})
$$

$$
f(x - a) \leftrightarrow e^{-ika}\,\tilde{f}(k) \qquad (\text{shift} \leftrightarrow \text{phase})
$$

$$
e^{ik_0 x} f(x) \leftrightarrow \tilde{f}(k - k_0) \qquad (\text{phase} \leftrightarrow \text{shift})
$$

$$
f(ax) \leftrightarrow \tfrac{1}{|a|}\tilde{f}(k/a) \qquad (\text{narrow} \leftrightarrow \text{wide})
$$

$$
f'(x) \leftrightarrow ik\,\tilde{f}(k) \qquad x f(x) \leftrightarrow i\,\tilde{f}'(k)
$$

[[convolution]]

$$
(f * g)(x) \leftrightarrow \tilde{f}(k)\,\tilde{g}(k) \qquad f(x)g(x) \leftrightarrow \tfrac{1}{2\pi}(\tilde{f}*\tilde{g})(k)
$$
