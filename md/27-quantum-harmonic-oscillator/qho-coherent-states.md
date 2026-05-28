Let all the variables in [[quantum-harmonic-oscillator]]

From definition, define $z$ to be the [[eigenvectoreigenvalue|eigenvalue]] of annihilation operator $\hat{a}$  and they are the most classical QHO states. They have the least uncertainty and follow classical trajectories under time evolution
$$
\hat{a}\ket{z} = z\ket{z}, \quad z \in \mathbb{C}
$$
Note that $\hat{a}^\dagger$ has no eigenstates. It is only possible because the [[hilbert-space]] is infinite dimension.

Expanding in the numbers basis where $c_n$ is a [[probability-amplitude]]
$$
\ket{z} = \sum_{n=0}^{\infty} c_n \ket{n}
$$
Apply $\hat{a}$. Note in [[qho-quantum-dynamics]] we proved $\hat{a}\ket{n}=\sqrt{n}\ket{n-1}$
$$
\hat{a}\ket{z} = \sum_n c_n \sqrt{n}\ket{n-1} = z\ket{z}
$$
Let $m=n-1$
$$
c_{m+1}\sqrt{m+1} = z\, c_m \;\;\Longrightarrow\;\; c_n\sqrt{n} = z\, c_{n-1}
$$
So

$$
c_n = \frac{z}{\sqrt{n}}c_{n-1} = \frac{z}{\sqrt{n}}\frac{z}{\sqrt{n-1}}c_{n-2} = \cdots = \frac{z^n}{\sqrt{n!}}c_0
$$
$$
\implies\boxed{\ket{z} = c_0 \sum_{n=0}^{\infty} \frac{z^n}{\sqrt{n!}}\ket{n}}
$$
Normalize to get $c_0$
$$
\braket{z|z} = |c_0|^2 \sum_n \frac{|z|^{2n}}{n!} = |c_0|^2 e^{|z|^2} \stackrel{!}{=} 1
$$
$$
\Longrightarrow \;\; \boxed{c_0 = e^{-|z|^2/2}}
$$
### Coherent State Observable
The [[observable]] for a coherent state becomes
Where $\hat{N}$ is [[number-operator]]
$$
\langle z|\hat{N}|z\rangle = \langle z|\hat{a}^\dagger \hat{a}|z\rangle = |z|^2
$$
$$
P(n) = |\braket{n|z}|^2 = |c_n|^2 = e^{-|z|^2}\frac{|z|^{2n}}{n!}
$$
this is a [[poisson-distribution]] with mean $\mathbb{E}[n]=|z|^2$ 

Note this is the energy expectation
$$
\langle E \rangle = \langle \hat{H} \rangle = \hbar\omega\!\left(\langle \hat{N}\rangle + \tfrac{1}{2}\right) = \hbar\omega\!\left(|z|^2 + \tfrac{1}{2}\right)$$
### Coherent State Wavefunction
The [[wave-function]] for a coherent state becomes
$$
\hat{a}\ket{z}=z\ket{z}
$$
Let variables from [[quantum-harmonic-oscillator]]
$$
\implies\frac{1}{\sqrt{2}}\left(\frac{x}{\alpha} + \alpha\frac{\partial}{\partial x}\right)\phi_z(x) = z\,\phi_z(x)
$$
rearranging gives
$$
\frac{\partial \phi_z}{\partial x} = \left(\frac{\sqrt{2}\,z}{\alpha} - \frac{x}{\alpha^2}\right)\phi_z
$$
$$
\ln\phi_z = \frac{\sqrt{2}\,z}{\alpha}x - \frac{x^2}{2\alpha^2} + \text{const}
$$
$$
\phi_z(x) = N_z\, e^{-(x-b)^2/2\alpha^2}\, e^{ikx}
$$
$$
b = \sqrt{2}\,\alpha\,\text{Re}[z], \qquad k = \frac{\sqrt{2}}{\alpha}\text{Im}[z]
$$
Note [[expected-value-of-observables]] are

$$
\braket{z|\hat{x}|z} = b, \qquad \braket{z|\hat{p}|z} = \hbar k
$$

Note Gaussian property
$$
\Delta x = \frac{\alpha}{\sqrt{2}}, \qquad \Delta p = \frac{\hbar}{\alpha\sqrt{2}} \;\;\Longrightarrow\;\; \Delta x\,\Delta p = \frac{\hbar}{2}
$$Note 
$$
\boxed{z = \frac{1}{\sqrt{2}}\left(\frac{\braket{\hat{x}}}{\alpha} + i\frac{\alpha}{\hbar}\braket{\hat{p}}\right)}
$$
This can be proven but I don't think the professor proved it.
