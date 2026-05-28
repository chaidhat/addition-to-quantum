A free particle in 1 dimension is described by

$$
\hat{H} = \frac{\hat{p}^2}{2m}
$$

What are eigenvectors of $\hat{H}$?
Momentum basis states -- since 

$$
\hat{p}\ket{k}=\hbar k\ket{k}
$$

then

$$
\hat{H}\ket{k} = \frac{(\hbar k)^2}{2m}\ket{k}
$$

Time evolution operator in spectral form yields

$$
\hat{U}(t) = e^{-i\hat{H}t/\hbar} = \int_{-\infty}^{\infty} e^{-i\frac{\hbar k^2}{2m}t}\,\ket{k}\bra{k}\,dk
$$

### Plane wave packet

$$
\psi(x,0) = e^{ik_0 x} \;\;\longrightarrow\;\; \psi(x,t) = e^{i(k_0 x - \omega_0 t)}, \quad \omega_0 = \frac{\hbar k_0^2}{2m}
$$

### Gaussian wave packet
Recall [[gaussian-wave-packet]].
This is the superposition of plane waves.
We chose the Gaussian as the wave function $\phi(x)$ because it saturates the [[heisenberg-uncertainty-relation]].

$$
\psi(x,0) = N\,e^{-\frac{(x-x_0)^2}{4\sigma^2}}\,e^{ik_0 x}
$$

Perform a [[continuous-time-fourier-transform|FT]] 

$$
\tilde\psi(k,0) = \tilde N\,e^{-\sigma^2(k-k_0)^2}
$$

Time-evolve each component by $e^{i\hbar k^2 t/(2m)}$

$$
\tilde\psi(k,t) = \tilde N\,e^{-i\frac{\hbar k^2}{2m}t}\,e^{-\sigma^2(k-k_0)^2}
$$

Perform an inverse FT

$$
\psi(x,t) = \tilde N\,e^{-\frac{[x - x_c(t)]^2}{4\sigma_c(t)^2}}\,e^{i(\cdots)}
$$

Where $i(...)$ is some crazy boi

$$
i(\cdots) = i k_0 x - i\omega_0 t + i\frac{\tau\,[x-x_c(t)]^2}{4\sigma^2(1+\tau^2)} - \tfrac{1}{2}i\arctan(\tau)
$$

and

$$
x_c(t) = x_0 + \frac{\hbar k_0}{m}t = x_0 + v_0 t, \qquad v_0 = \frac{\hbar k_0}{m}
$$

and

$$
\sigma_c^2(t) = \sigma^2 + \frac{\hbar^2}{4m^2\sigma^2}t^2
$$

### Moving Gaussian
If we square the wave function then we can see its probability density

$$
|\psi(x,t)|^2 = |\tilde N|^2\,e^{-\frac{(x - x_c(t))^2}{2\sigma_c(t)^2}}
$$


We can see that the Gaussian probability cloud drifts and broadens. The center $x_c(t)$ slides at constant velocity and the width $\sigma_c(t)$ grows over time. The shape always remains Gaussian.

This is similar to diffusive brownian motion of a classical particle. A particle buffeted by random collision usually has a spread like:

$$
\sigma_\text{classical}(t) \sim \sqrt{Dt}
$$

but a quantum particle spreads at

$$
\sigma_c(t) \approx \frac{\hbar t}{2m\sigma}
$$

The quantum particle spreads linear in $t$, but the brownian one spreads at $\sqrt{t}$. This is faster than a classical diffusing cloud

Wave packet spreads faster if the initial position is more localized/confined -- that means $\sigma$ is small.
