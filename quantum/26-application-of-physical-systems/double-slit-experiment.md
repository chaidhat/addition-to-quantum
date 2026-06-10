The double slit experiment proves that [[spin-12-systems|quantum particles]] can be described as a wave. They [[interference|interfere]] with each other

The two slits are represented as path kets $\ket{A}$ (top slit) and $\ket{B}$ (bottom slit).

A particle $\ket{\psi}$ passes through it. The slits are like an [[operator]] that forces its state into

$$
\ket{\psi} = \tfrac{1}{\sqrt2}\ket{A} + \tfrac{1}{\sqrt2}\ket{B}
$$

To find the amplitude at a certain screen distance $x$ it'd be. 

$$
\braket{x|\psi} = \tfrac{1}{\sqrt2}\braket{x|A} + \tfrac{1}{\sqrt2}\braket{x|B}
$$

i.e., writing as [[wave-function]]

$$
\psi(x)=\frac{1}{\sqrt{2}}\psi_A(x)+\frac{1}{\sqrt{2}}\psi_B(x)
$$

Because they're at different distances, they interfere differently depending on the angle $\phi$ from the thing.
$$
\psi_A(x) = a\,e^{i\phi_A}, \qquad \psi_B(x) = a\,e^{i\phi_B}
$$

To predict the [[probability-theory|probability]] of a particle at $(x,y)$ where $L$ is the distance from the slit plane to the screen, $\lambda$ is the wavelength of the particle. $a$ is the amplitude size of the wave and $d$ is the slit separation

$$
\phi = \frac{2\pi}{\lambda}\, r = k\,r, \qquad k = \frac{2\pi}{\lambda}
$$

Where $r$ is the distance the wave travels. The distances $r_A,r_B$ are the distance from slit $A,B$ to the point

$$
r_A(x,y) = \sqrt{L^2 + \left(x - \tfrac{d}{2}\right)^2 + y^2}, \qquad r_B(x,y) = \sqrt{L^2 + \left(x + \tfrac{d}{2}\right)^2 + y^2}
$$

$$
P(x,y) = |\psi(x,y)|^2 = a^2\Big(1 + \cos\big[k\,(r_A - r_B)\big]\Big)
$$

