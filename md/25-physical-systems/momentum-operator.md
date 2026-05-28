# Momentum [[operator|Operator]]
It is a [[continuous-operator]] that represents the position of a particle.
In the position [[basis-state|basis]]:

$$
(\hat{p}\psi)(x)=-i\hbar \frac{d}{dx}\psi(x)
$$

Note that

$$
\hat{p}=\int p\ket{p}\bra{p}dp
$$

Which is just like [[position-operator]] but acts on a different basis.

### Proof
Let's say we have two bases for the same [[hilbert-space|Hilbert space]]: position $\{\ket{x}\}$ and momentum $\{\ket{p}\}$. We need to see the transition amplitude (i.e., the overlap $\braket{x|p}$).

See [[de-broglie]] first

Constant $C$ is fixed as such:

$$
\braket{p|p'}=\bra{p}I\ket{p'}
$$

Expand out $I$ as [[non-denumerable-basis|continuous]] spectral decomposition. See [[continuous-identity]].

$$
=\bra{p}\left(\int\ket{x}\bra{x}dx\right)\ket{p'}
$$

To [[continuous-orthonormality|normalize]] it we do

$$
\braket{p|p'}=|C|^2\int_{-\infty}^\infty e^{i(p'-px)/\hbar}dx
$$

We [[set]] it to itself so that we can find $C$ that makes it [[normal]].
Note the [[continuous-time-fourier-transform|Fourier Transform]] representation of the [[dirac-delta]].

$$
\delta(z)=\frac{1}{2\pi}\int_{-\infty}^\infty (1)e^{iyz}dy
$$

Substitute it in to get

$$
\delta (p-p')= |C|^2 \cdot \hbar \cdot 2\pi \, \delta(p' - p)
$$

This forces

$$
\boxed{|C|^2=1/(2\pi\hbar)\quad\Leftrightarrow \quad C=1/\sqrt{2\pi\hbar}}
$$

Compute $\braket{p|\psi}$ 

$$
\braket{p|\psi} = \int \braket{p|x}\braket{x|\psi} \, dx = \frac{1}{\sqrt{2\pi\hbar}} \int e^{-ipx/\hbar} \, \psi(x) \, dx
$$

we compare it to the [[continuous-time-fourier-transform|CTFT]] we wrote earlier

$$
\tilde\psi(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-ikx} \, \psi(x) \, dx
$$

so

$$
\braket{p|\psi}=\bar{\psi}(p)=\frac{1}{\sqrt{\hbar}} \tilde\psi(k = p/\hbar)
$$

Note that

$$
\hat{p}\ket{p}=p\ket{p}
$$

take [[adjoint|Hermitian adjoint]] of both sides. Because $\hat{p}$ is [[hermitian-matrix|Hermitian]] and [[standard-number-systems|real]], 

$$
\bra{p}\hat{p}^\dagger = p^* \bra{p} \;\Longrightarrow\; \bra{p}\hat{p} = p\bra{p}
$$

Because we want to evaluate $\hat{p}\ket{\psi}$ in p-basis, we take $\bra{p}\hat{p}\ket{\psi}$ 

$$
\braket{p|\hat{p}|\psi} = p \braket{p|\psi} = p \, \bar\psi(p)
$$

In the p representation

$$
(\hat{p}\bar\psi)(p) = p \, \bar\psi(p)
$$

In the k representation

$$
(\hat{p}\tilde\psi)(k) = \hbar k \, \tilde\psi(k)
$$

In the x representation?
Let's find out $\hat{p}\ket{\psi}$ in the x-basis, we take $\bra{x}\hat{p}\ket{\psi}$ 

$$
\braket{x|\hat{p}|\psi} = \int_{-\infty}^{\infty} p \braket{x|p}\braket{p|\psi}\,dp
$$

Since we know $p$ is just the change of $x$ i.e., $\frac{\partial}{\partial x}$

$$
= \int_{-\infty}^{\infty} \left(\frac{\hbar}{i}\frac{\partial}{\partial x}\braket{x|p}\right)\braket{p|\psi}\,dp
$$

$$
= \frac{\hbar}{i}\frac{\partial}{\partial x} \int_{-\infty}^{\infty} \braket{x|p}\braket{p|\psi}\,dp
$$

Recall from [[continuous-operator]]

$$
= \frac{\hbar}{i}\frac{\partial}{\partial x}\braket{x|\psi}
$$

$$
= \frac{\hbar}{i}\frac{\partial}{\partial x}\psi(x)
$$

Hence

$$
(\hat{p} \psi)(x) = \frac{\hbar}{i}\frac{\partial}{\partial x}\psi(x)
$$

$$
\boxed{(\hat{p} \psi)(x) = -i\hbar \frac{\partial}{\partial x}\psi(x)}
$$