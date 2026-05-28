# Wave Packet Momentum
Given a [[wave-packet]], how do we find the expected value of momentum, given the definition of wave packet?
We know that

$$
\langle \hat{p} \rangle = \int_{-\infty}^{\infty} \psi^*(x)\left[-i\hbar \frac{d}{dx}\right]\psi(x)\, dx
$$

Apply $\frac{d}{dx}$ to $\phi(x)e^{ikx}$ via [[differentiation|product rule]]

$$
\frac{d}{dx}\psi(x) = \frac{d}{dx}\left[ \phi(x)e^{ikx}\right]= \frac{d}{dx} \phi(x)e^{ikx} + ik\,\phi(x)\, e^{ikx}
$$

To get we [[integration|integrate]]

$$
\braket{\hat{p}}= -i\hbar \int_{-\infty}^{\infty} \phi(x)e^{-ikx}\left(\frac{d\phi(x)}{dx}e^{ikx} + ik\phi(x)e^{ikx}\right)dx
$$

$$
=-i\hbar\int \phi(x),\frac{d\phi(x)}{dx}e^{-ikx}e^{ikx}\,dx + (-i\hbar)(ik)\int \phi^2(x)e^{-ikx}e^{ikx}\,dx
$$

$$
= -i\hbar \int_{-\infty}^{\infty} \phi(x)\frac{d\phi(x)}{dx}\,dx + \hbar k \int_{-\infty}^{\infty} \phi^2(x)\,dx
$$

$$
= -i\hbar \int_{-\infty}^{\infty} \phi(x)\frac{d\phi(x)}{dx}\,dx + \hbar k\quad(1)
$$

Note

$$
\frac{d}{dx}[\phi^2(x)] = 2\,\phi(x)\frac{d\phi}{dx} \implies \phi(x)\frac{d\phi}{dx} = \frac{1}{2}\frac{d}{dx}[\phi^2(x)]
$$

Note

$$
\int_{-\infty}^{\infty} \phi(x)\frac{d\phi}{dx}\,dx = \frac{1}{2}\int_{-\infty}^{\infty} \frac{d}{dx}[\phi^2(x)]\,dx = \frac{1}{2}\Big[\phi^2(x)\Big]_{-\infty}^{\infty}
$$

$$
= \frac{1}{2}(0-0) = 0
$$

So sub into (1)

$$
\braket{\hat{p}}=-i\hbar(0)+\hbar k
$$

$$
=\hbar k
$$