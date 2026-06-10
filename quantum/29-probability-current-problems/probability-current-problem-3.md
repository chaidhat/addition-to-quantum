We are going to look at a problem

$$
V(x) = \begin{cases} 0 & -a \leq x \leq a \\ V_0 & \text{otherwise} \end{cases}
$$

Describe the $J(x)$ of the particle in all states

Note that in this case, we look at the bound state. Scattering is not useful. Reflecting state assumes $V_L\neq V_R$ which is not possible therefore it DNE.

The potential is [[even-odd-functions|even]] $V(-x)=V(x)$. A theorem says the bound eigenstates can be chosen such that $\phi(x)$ is either even or odd. 

# Bound State, Even Wave function Case

$$
\phi(x) = \begin{cases} Ae^{bx} & x < -a \\ B\cos(kx) & -a \leq x \leq a \\ Ae^{-bx} & x > a \end{cases}
$$

where

$$
k = \sqrt{\frac{2mE}{\hbar^2}}, \qquad b = \sqrt{\frac{2m(V_0 - E)}{\hbar^2}}
$$

Matching $x=a$

$$
Ae^{-ba} = B\cos(ka) \tag{1}
$$

$$
\frac{d}{dx}\left(Ae^{-bx}\right)\Big|_{a} = -bAe^{-ba}
$$

$$
\frac{d}{dx}\left(B\cos(kx)\right)\Big|_{a} = -kB\sin(ka)
$$

$$
-bAe^{-ba} = -kB\sin(ka) \tag{2}
$$

Div (2) by (1)

$$
\frac{-bAe^{-ba}}{Ae^{-ba}} = \frac{-kB\sin(ka)}{B\cos(ka)}
$$

$$
-b = -k\tan(ka)
$$

$$
b = k\tan(ka)
$$

This is transcendental -- you cannot isolate $E$ algebraically. You must numerically solve this.

Let
$$
z = ka, \qquad z_0 = \sqrt{\frac{2mV_0}{\hbar^2}}\,a
$$

where $z$ is dimensionless inside wavenumber.

$$
(ba)^2 = \frac{2m(V_0 - E)}{\hbar^2}\,a^2 = \underbrace{\frac{2mV_0}{\hbar^2}a^2}_{z_0^2} - \underbrace{\frac{2mE}{\hbar^2}a^2}_{z^2} = z_0^2 - z^2
$$
so

$$
ba=\sqrt{z_0^2-z^2}
$$

$$
k^2+b^2=2mV_0/\hbar^2
$$

so its a circle radius $z_0$ inside $(z,ba)$ plane i.e., $ba$ is on vertical axis and $z$ is on horizontal axis

# Bound State, Odd Wave function Case

$$
\phi(x) = \begin{cases} -Ae^{bx} & x < -a \\ B\sin(kx) & -a \leq x \leq a \\ Ae^{-bx} & x > a \end{cases}
$$

Odd parity

$$
Ae^{-ba} = B\sin(ka) \tag{1}
$$

$$
-bAe^{-ba} = kB\cos(ka) \tag{2}
$$

Div (2) by (1)

$$
-b = k\cot(ka) \;\Rightarrow\; b = -k\cot(ka)
$$

# Conclusion

This is the result

$$
\boxed{\sqrt{\left(\frac{z_0}{z}\right)^2 - 1} = \begin{cases} \tan z & \text{(even } \phi) \\ -\cot z & \text{(odd } \phi) \end{cases}}
$$

# Bound State Solutions

If

$$
\frac{n\pi}{2} \leq z_0 \leq \frac{(n+1)\pi}{2}
$$

Then $n+1$ bound states


