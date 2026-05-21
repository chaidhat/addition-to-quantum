# Compatibility of Observables

If two [<span class="underline">observables</span>](#observables) are compatible, then they can be measured simultaneously with one basic measurement.
This means that observing one doesn’t affect the other.

Two [<span class="underline">operators</span>](#operators) $\hat{A}$ and $\hat{B}$ are compatible if and only if they commute, i.e. $[\hat{A},\hat{B}]=0$.

$$\hat{A},\hat{B}\quad\text{are compatible}\quad\Leftrightarrow\quad[\hat{A},\hat{B}]=0$$

Proof
$$\Rightarrow\hat{A}\hat{B}=\sum_{n,m}A_nB_m\left\lvert \phi_n \right\rangle\left\langle \phi_n|\phi_m \right\rangle\left\langle \phi_m \right\rvert\\
$$
$$=\sum_nA_nB_n\left\lvert \phi_n \right\rangle\left\langle \phi_n \right\rvert=\hat{B}\hat{A}\\
$$
$$\Leftarrow\hat{A}\left\lvert \phi_n \right\rangle=A_n\left\lvert \phi_n \right\rangle\\
$$
$$\hat{A}\hat{B}\left\lvert \phi_n \right\rangle=\hat{B}\hat{A}\left\lvert \phi_n \right\rangle=A_n\hat{B}\left\lvert \phi_n \right\rangle$$

Example
