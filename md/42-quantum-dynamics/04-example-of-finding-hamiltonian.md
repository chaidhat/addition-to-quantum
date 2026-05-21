# Example of Finding Hamiltonian

Let there be a particle in space where energy is kinetic energy plus potential energy.

In classical physics, we know that
$$KE = \frac{1}{2}mv^2 = \frac{p^2}{2m}$$
where $KE$ is kinetic energy, $m$ is mass, $v$ is velocity and $p=mv$ is momentum.
We know that potential energy $V(x)$ is a function of position $x$.

Hence in classical physics, energy is
$$E=KE+V(x)=\frac{p^2}{2m}+V(x)$$

A wavelength $\lambda$ travelling in the direction $x$ can be written as $e^{ikx}$ where wave number $k$ is defined as
$$k\triangleq \frac{2\pi}{\lambda}$$

de Broglie in 1924 hypothesized that every particle has wave-like behavior with wavelength $\lambda$
$$\lambda = \frac{h}{p}$$
$$\Rightarrow p=\frac{h}{2\pi/k}=\hbar k$$

But we want this as an operator where the plane wave is an [<span class="underline">eigenstate</span>](#eigenstates) of $\hat{p}$ with eigenvalue $\hbar k$ (its momentum).

$$\hat{p}e^{ikx}=\hbar ke^{ikx}$$
Now differentiate $e^{ikx}$ w.r.t $x$
$$\Rightarrow\frac{\partial}{\partial x}e^{ikx}=ike^{ikx}$$
Multiply by $\hbar/i$
$$\Rightarrow\frac{\hbar}{i}\frac{\partial}{\partial x}e^{ikx}=\hbar ke^{ikx}$$
Comparing like terms we find
$$\hat{p}=\frac{\hbar}{i}\frac{\partial}{\partial x}$$

Anyways, after doing all of that, we’re going to guess the Hamiltonian.
Guess that the Hamiltonian is $H(t)=E$
$$H(t)=\frac{\hat{p}^2}{2m}+V(\hat{x})$$
Expand the state into basis via [<span class="underline">spectral decomposition</span>](#spectral-decomposition)

$$\left\lvert \psi(t) \right\rangle=\sum_k\left\langle x_k|\psi(t) \right\rangle\left\lvert x_k \right\rangle=\int dx \left\langle x|\psi(t) \right\rangle\left\lvert x \right\rangle$$

The intergral is the continuum limit of the discretized version on the left.
Let’s take the Schrödinger equation and apply it to the state.

$$\left\langle x \right\rvert i\hbar \frac{d}{dt}\left\lvert \psi(t) \right\rangle=\left\langle x \right\rvert H(t)\left\lvert \psi(t) \right\rangle$$
LHS and RHS are both manipulated to get
$$i\hbar \frac{\partial}{\partial t}\left\langle x|\psi(t) \right\rangle =H(t)\left\langle x|\psi(t) \right\rangle$$
$$\Rightarrow i\hbar \frac{\partial}{\partial t}\left\langle x|\psi(t) \right\rangle =\left\langle x \right\rvert\frac{\hat{p}^2}{2m}\left\lvert \psi(t) \right\rangle+V(x)\left\langle x|\psi(t) \right\rangle$$
$$\Rightarrow i\hbar \frac{\partial}{\partial t}\left\langle x|\psi(t) \right\rangle =-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\left\langle x|\psi(t) \right\rangle+V(x)\left\langle x|\psi(t) \right\rangle$$
$$\Rightarrow i\hbar \frac{\partial}{\partial t}\left\langle x|\psi(t) \right\rangle =\left(-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x)\right)\left\langle x|\psi(t) \right\rangle$$
If we solve this for specific systems and check against measurements, it will confirm whether or not our guess for $H(t)$ was right
