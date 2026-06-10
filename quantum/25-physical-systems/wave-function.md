# Wave [[function|function]]

Where $\left\lvert \psi(t) \right\rangle$ is a [[ket-state|state]] in the [[hilbert-space|Hilbert space]], $\psi(x,t)$ is the wavefunction w.r.t time $t$ and position $x$.

This is like a [[projection]] of $\ket{\psi}$ onto $\ket{x}$ -- the component of $\ket{\psi}$ along $\ket{x}$.

Let

$$
\psi(x,t)\triangleq\left\langle x|\psi(t) \right\rangle
$$

$$
\psi(x)\triangleq \braket{x|\psi}
$$

Note
1. Note
If an [[operator|operator]] $\hat{A}$ acts on a wavefunction $\psi(x)$, evaluated at $x$, the notation looks like this

$$
(\hat{A}\psi)(x)
$$

2. Note (where $\psi_n$ is the [[probability-amplitude]], $\ket{\psi},\ket{n}$ is a state)

$$
\psi_n = \sum_m \psi_m \delta_{nm} = \sum_m \psi_m \braket{n|m} = \bra{n}\left(\sum_m \psi_m \ket{m}\right) = \braket{n|\psi}
$$