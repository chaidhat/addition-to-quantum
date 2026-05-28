# Gaussian Wave Packet

Given a [[wave-packet]], we can play around with $\phi(x)$ to give us the probability density function of the probability $P(a \le x \le b) = \int_a^b |\psi(x)|^2\,dx$ that the particle will be exactly between $a\leq x\leq b$.

Let's assume the probability distribution is a [[gaussian-distribution|Gaussian]]

$$
\phi(x) = \frac{1}{(2\pi\sigma^2)^{1/4}}\,e^{-\frac{x^2}{4\sigma^2}}
$$

Note that, because of a Gaussian,

$$
\mathbb{E}[\hat{x}]=0\quad\Delta x^2=\mathbb{E}[\hat{x}^2]=\sigma^2
$$

[[continuous-time-fourier-transform|Fourier Transform]] of it is

$$
\tilde{\psi}(k) = N \int_{-\infty}^{\infty} e^{-\frac{x^2}{4\sigma^2} + ik_0 x - ikx}\,dx = \tilde{N}\,e^{-\sigma^2(k-k_0)^2}
$$

which is also Gaussian. 

Note that

$$
\mathbb{E}[\hat{p}]=\hbar k_0\quad \Delta p^2=\mathbb{E}[\hat{p}^2]-\mathbb{E}[\hat{p}]^2=\frac{\hbar^2}{4\sigma^2}
$$

$|\psi(x)|^2$ has width $\sigma$ and $|\hat{\psi}(k)|^2$ has width $1/\sigma$

This causes (Note the $\Delta$ notation means [[spread|standard deviation]])

$$
\Delta x\,\Delta p = \frac{\hbar}{2}
$$

This means that Gaussians are minimum uncertainty wave packets because they saturate the [[heisenberg-uncertainty-relation|Heisenberg uncertainty relation]]. This means that they are the closest quantum analog to a classical particle -> they have the most defined $\mathbb{E}[x]$ and $\mathbb{E}[p]$

