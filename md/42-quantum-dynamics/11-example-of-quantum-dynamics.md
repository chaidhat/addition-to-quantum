# Example of Quantum Dynamics

An electron is in an magnetic field in the $z+$ direction. There is a particle in state
$$\left\lvert \psi(0) \right\rangle=\begin{pmatrix}\cos\theta_0/2 \\ e^{i\phi_0}\sin\theta_0/2\end{pmatrix}$$
Find out the expected value of $S_z, S_x, S_y$ at time $t$.

Classical charged particle has
$$\vec{\mu}=\frac{q}{2m}\vec{s}$$

A quantum one also has a $g$-factor
$$\vec{\mu}=g\frac{q}{2m}\vec{s}$$

In the case of an electron, $q=e, m=m_e, g\approx 2$
$$\vec{\mu}=g\underbrace{\frac{e\hbar}{2m_e}}_{\mu_B}\frac{1}{\hbar}\vec{s}$$
Where $\mu_B$ is the Bohr magneton.

The spin in magnetic field $\vec{B}$ experiences a torque.

Clasically, the energy of a magnetic dipole in a B field is
$$U=-\vec{\mu}\cdot\vec{B}$$

In quantum mechanics, the energy is the Hamiltonian operator $\hat{H}$
Let
$$\gamma = \frac{g\mu_B}{\hbar}$$
So
$$\hat{H}=-\vec{\mu}\cdot\vec{B}=-\gamma\vec{s}\cdot\vec{B}$$

Since B field is in the $z+$ direction, $\vec{B}=B\hat{S_z}$

$$\hat{H}=-\gamma B \frac{\hbar}{2}\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}=-\gamma B \hat{S}_z$$

To do it the Schrödinger equation way, take the eigenvalues and [<span class="underline">eigenstates</span>](#eigenstates) of $H$
$$H\left\lvert z\pm \right\rangle=\mp\gamma B \frac{\hbar}{2}\left\lvert z\pm \right\rangle$$
Because Hamiltonian is time-independent, we can use the [<span class="underline">uniform dynamics</span>](#uniform-dynamics) solution to find $U(t,t_0)$
$$U(t,0)\left\lvert z\pm \right\rangle=e^{-iHt/\hbar}\left\lvert z\pm \right\rangle=e^{\pm i\gamma B t/2}\left\lvert z\pm \right\rangle$$

Looking at the state $\left\lvert \psi(0) \right\rangle$, we can write it as a superposition of the eigenstates of $H$
$$\left\lvert \psi(0) \right\rangle=\cos\theta_0/2\left\lvert z+ \right\rangle+e^{i\phi_0}\sin\theta_0/2\left\lvert z- \right\rangle$$
$$\left\lvert \psi(t) \right\rangle=U(t)\left\lvert \psi(0) \right\rangle$$
$$\left\lvert \psi(t) \right\rangle=(e^{i\gamma B t/2})\cos\theta_0/2\left\lvert z+ \right\rangle+(e^{-i\gamma B t/2})e^{i\phi_0}\sin\theta_0/2\left\lvert z- \right\rangle$$
Global phase should be separated out
$$\left\lvert \psi(t) \right\rangle=e^{i\gamma B t/2}\left[\cos\theta_0/2\left\lvert z+ \right\rangle+(e^{i(-\gamma B t+\phi_0)})\sin\theta_0/2\left\lvert z- \right\rangle\right]$$
Hence
$$\langle\psi(t)|\hat{S}_z|\psi(t)\rangle = \frac{\hbar}{2}\begin{pmatrix}\psi_+^* & \psi_-^*\end{pmatrix}\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}\begin{pmatrix}\psi_+ \\ \psi_-\end{pmatrix}$$

$$= \frac{\hbar}{2}\begin{pmatrix}\psi_+^* & \psi_-^*\end{pmatrix}\begin{pmatrix}\psi_+ \\ -\psi_-\end{pmatrix}$$

$$= \frac{\hbar}{2}\left(\psi_+^*\psi_+ - \psi_-^*\psi_-\right) = \frac{\hbar}{2}\left(|\psi_+|^2 - |\psi_-|^2\right)$$

$$= \frac{\hbar}{2}\left(\cos^2\frac{\theta_0}{2} - \sin^2\frac{\theta_0}{2}\right)$$

$$= \frac{\hbar}{2}\cos\theta_0 \quad \text{(Note: unchanging in time)}$$

$$\langle\psi(t)|\hat{S}_x|\psi(t)\rangle = \frac{\hbar}{2}\begin{pmatrix}\psi_+^* & \psi_-^*\end{pmatrix}\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}\begin{pmatrix}\psi_+ \\ \psi_-\end{pmatrix}$$

$$= \frac{\hbar}{2}\begin{pmatrix}\psi_+^* & \psi_-^*\end{pmatrix}\begin{pmatrix}\psi_- \\ \psi_+\end{pmatrix}$$

$$= \frac{\hbar}{2}\left(\psi_+^*\psi_- + \psi_-^*\psi_+\right)$$

Plug in $\psi_+ = e^{+i\gamma B t/2}\cos(\theta_0/2)$ and $\psi_- = e^{-i\gamma B t/2}e^{i\phi_0}\sin(\theta_0/2)$:

$$\psi_+^*\psi_- = e^{-i\gamma B t/2}\cos\frac{\theta_0}{2} \cdot e^{-i\gamma B t/2}e^{i\phi_0}\sin\frac{\theta_0}{2} = e^{i(\phi_0 - \gamma B t)}\cos\frac{\theta_0}{2}\sin\frac{\theta_0}{2}$$

$$\psi_-^*\psi_+ = e^{-i(\phi_0 - \gamma B t)}\cos\frac{\theta_0}{2}\sin\frac{\theta_0}{2}$$

$$\psi_+^*\psi_- + \psi_-^*\psi_+ = 2\cos\frac{\theta_0}{2}\sin\frac{\theta_0}{2}\cos(\phi_0 - \gamma B t) = \sin\theta_0 \cos(\phi_0 - \gamma B t)$$

$$\Rightarrow\langle\psi(t)|\hat{S}_x|\psi(t)\rangle = \frac{\hbar}{2}\sin\theta_0 \cos(\phi_0 - \gamma B t)$$

$$\langle\psi(t)|\hat{S}_y|\psi(t)\rangle = \frac{\hbar}{2}\begin{pmatrix}\psi_+^* & \psi_-^*\end{pmatrix}\begin{pmatrix}0 & -i \\ i & 0\end{pmatrix}\begin{pmatrix}\psi_+ \\ \psi_-\end{pmatrix}$$

$$= \frac{\hbar}{2}\begin{pmatrix}\psi_+^* & \psi_-^*\end{pmatrix}\begin{pmatrix}-i\psi_- \\ i\psi_+\end{pmatrix}$$

$$= \frac{\hbar}{2}\left(-i\psi_+^*\psi_- + i\psi_-^*\psi_+\right) = \frac{i\hbar}{2}\left(\psi_-^*\psi_+ - \psi_+^*\psi_-\right)$$

Using the same products as above, with $e^{ix} - e^{-ix} = 2i\sin x$:

$$\psi_-^*\psi_+ - \psi_+^*\psi_- = -2i\cos\frac{\theta_0}{2}\sin\frac{\theta_0}{2}\sin(\phi_0 - \gamma B t) = -i\sin\theta_0\sin(\phi_0 - \gamma B t)$$

$$\Rightarrow\langle\psi(t)|\hat{S}_y|\psi(t)\rangle = \frac{i\hbar}{2}\cdot(-i)\sin\theta_0\sin(\phi_0 - \gamma B t) = \frac{\hbar}{2}\sin\theta_0\sin(\phi_0 - \gamma B t)$$

Another way to do it is to use the [<span class="underline">Heisenberg picture</span>](#heisenberg-picture)

$$\frac{d}{dt}\hat{A}(t) = \frac{i}{\hbar}[\hat{H}, \hat{A}]$$

Recalling the [<span class="underline">Pauli matrices</span>](#pauli-matrices) and their commutators, we can derive it for [<span class="underline">spin operators</span>](#quantum-system) $S_z,S_x,S_y$.

$$[\hat{S}_x, \hat{S}_y] = i\hbar\hat{S}_z, \quad [\hat{S}_y, \hat{S}_z] = i\hbar\hat{S}_x, \quad [\hat{S}_z, \hat{S}_x] = i\hbar\hat{S}_y$$

For our Hamiltonian $\hat{H} = -\gamma B \hat{S}_z$:

$$\frac{d}{dt}\hat{S}_z(t) = \frac{i}{\hbar}[-\gamma B \hat{S}_z(t), \hat{S}_z(t)] = -\frac{i\gamma B}{\hbar}[\hat{S}_z(t), \hat{S}_z(t)] = 0$$

$$\frac{d}{dt}\hat{S}_x(t) = \frac{i}{\hbar}[-\gamma B \hat{S}_z(t), \hat{S}_x(t)]$$

$$= -\frac{i\gamma B}{\hbar}[\hat{S}_z(t), \hat{S}_x(t)]$$

$$= -\frac{i\gamma B}{\hbar}\cdot i\hbar \hat{S}_y(t) = \gamma B \hat{S}_y(t)$$

$$\frac{d}{dt}\hat{S}_y(t) = \frac{i}{\hbar}[-\gamma B \hat{S}_z(t), \hat{S}_y(t)]$$

$$= -\frac{i\gamma B}{\hbar}[\hat{S}_z(t), \hat{S}_y(t)]$$

$$= -\frac{i\gamma B}{\hbar}\cdot(-i\hbar \hat{S}_x(t)) = -\gamma B \hat{S}_x(t)$$

Collecting all three:

$$\frac{d}{dt}(\hat{S}_x, \hat{S}_y, \hat{S}_z) = \gamma B(\hat{S}_y, -\hat{S}_x, 0)$$

Using [<span class="underline">cross product</span>](#cross-product) formula:

$$= -\gamma(0, 0, B)\times(\hat{S}_x, \hat{S}_y, \hat{S}_z)$$

$$\boxed{\frac{d\vec{S}}{dt} = -\gamma \vec{B}\times\vec{S}} \quad \text{(Larmor precession)}$$
