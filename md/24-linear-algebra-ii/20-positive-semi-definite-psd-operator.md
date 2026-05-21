# Positive Semi-Definite (PSD) Operator

An operator $\hat{P}$ is PSD if and only if

- $\hat{P}$ is [<span class="underline">Hermitian</span>](#hermitian-operators)

- this holds true for all states $\left\lvert \psi \right\rangle$ :

$$\begin{gather*}
    \left\langle \psi \right\rvert\hat{P}\left\lvert \psi \right\rangle\geq 0
\end{gather*}$$

This means the angle between $\left\lvert \psi \right\rangle$ and $\hat{P}\left\lvert \psi \right\rangle$ is
less than 90 degrees.

Example

- [<span class="underline">Projectors</span>](#projectors) are PSD
