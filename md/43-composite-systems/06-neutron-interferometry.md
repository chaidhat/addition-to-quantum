# Neutron Interferometry

Let
$$R_{\hat{n}}(\theta) = e^{-i \theta \hat{J}_{\hat{n}} / \hbar}$$
This is how you rotate a quantum state by an angle $\theta$ around $\hat{n}$ where $\hat{J}_{\hat{n}}$ is the angular momentum operator along $\hat{n}$.

We experimentally observed that

$$R_x(2\pi) = e^{-i 2\pi \hat{S}_x / \hbar} = -I, \qquad R_x(4\pi) = I$$

Given a $\hat{S_x}$ operation, turning it $\theta=2\pi$ causes there to be a negative sign infront of the $I$. Rotating it another $2\pi$ causes it to return to the same state. This is definitely not how it works in classical physics, where if you rotate something $2\pi$ you’d get right back to where it started.
This actually means we live in a $4\pi$-world through experimental verification.

This was tested by using a neutron interferometer. Basically, imagine if a neutron at $\left\lvert \psi \right\rangle$ hits a silicon crystal beam splitter. The state of the neutron is its position $\{u,l\}$ tensor product its spin $\{+, -\}$.
This is just how we define it.

Basis: $\{\left\lvert n,+ \right\rangle,\ \left\lvert n,- \right\rangle,\ \left\lvert \ell,+ \right\rangle,\ \left\lvert \ell,- \right\rangle\}$

$$\left\lvert \psi \right\rangle = \left\lvert \text{position} \right\rangle \otimes \left\lvert \text{spin} \right\rangle$$

Neutron beam splitter (silicon crystal): $\left\lvert n,s \right\rangle$ splits into transmitted $\left\lvert n,s \right\rangle$ and reflected $\left\lvert \ell,s \right\rangle$.

$$(B \otimes I)\left\lvert n,s \right\rangle = \tfrac{1}{\sqrt{2}}\bigl(\left\lvert n \right\rangle + \left\lvert \ell \right\rangle\bigr) \otimes \left\lvert s \right\rangle$$
$$(B \otimes I)\left\lvert \ell,s \right\rangle = \tfrac{1}{\sqrt{2}}\bigl(\left\lvert n \right\rangle - \left\lvert \ell \right\rangle\bigr) \otimes \left\lvert s \right\rangle$$
$$B = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$

The lower path passes through a static magnetic field $B$, which applies a spin rotation $R_x(\theta)$. The two paths recombine at a second beam splitter, with detectors $D_0$ and $D_1$ on the two outputs.

The full evolution is
$$\left\lvert \psi_{\text{out}} \right\rangle = (B \otimes I)\, U\, (B \otimes I)\, \left\lvert u, s \right\rangle$$
where the magnetic field implements the conditional rotation
$$U = \left\lvert u \right\rangle\left\langle u \right\rvert \otimes I + \left\lvert \ell \right\rangle\left\langle \ell \right\rvert \otimes R_x(\theta).$$

Case $\theta = 2\pi$:
$$\left\lvert u, s \right\rangle \;\xrightarrow{B \otimes I}\; \tfrac{1}{\sqrt{2}}\bigl(\left\lvert u \right\rangle + \left\lvert \ell \right\rangle\bigr) \otimes \left\lvert s \right\rangle$$
$$\xrightarrow{R_x(2\pi) = -I}\; \tfrac{1}{\sqrt{2}}\bigl(\left\lvert u \right\rangle - \left\lvert \ell \right\rangle\bigr) \otimes \left\lvert s \right\rangle
    \;\xrightarrow{B \otimes I}\; \left\lvert \ell, s \right\rangle$$
$\Rightarrow$ neutron at $D_1$.

Case $\theta = 4\pi$:
$$\left\lvert u, s \right\rangle \;\longrightarrow\; \left\lvert u, s \right\rangle \quad\Rightarrow\text{ neutron at } D_0.$$

This is fully deterministic as in general, $P(D_0) = \cos^2(\theta/4)$ and $P(D_1) = \sin^2(\theta/4)$, so $\theta = 2\pi, 4\pi$ are the special tunings where one probability hits $1$.

This is the physical consequence of $R_{\hat{n}}(2\pi) = -I \neq I$.

This experimentally proves that we live in a $4\pi$-world.
