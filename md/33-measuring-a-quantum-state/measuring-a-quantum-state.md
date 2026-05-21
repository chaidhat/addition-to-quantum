# Measuring a Quantum State

Before:
The system is in a state $\left\lvert \psi \right\rangle$ and you measure the [[observables|observable]] $\hat{A}$.

Measure: We get an outcome $A_n$ with probability $P_n=\left\langle \psi \right\rvert\hat{\Pi}_n\left\lvert \psi \right\rangle$

Given [[borns-rule]] for a non-degenerate [[eigenstates|eigenstate]] $\left\lvert \phi_n \right\rangle$,

$$P_n=|\left\langle \phi_n|\psi \right\rangle|^2$$

This is because [[borns-rule]].
Note that $\hat{\Pi}_n$, the [[projectors|projector]] onto the $\lambda_n$-[[eigenspaces|eigenspace]] of $\hat{A}$, is
$$\hat{\Pi}_n=\left\lvert \phi_n \right\rangle\left\langle \phi_n \right\rvert$$
$$\Rightarrow\hat{\Pi}_n\left\lvert \psi \right\rangle=\left\lvert \phi_n \right\rangle\left\langle \phi_n|\psi \right\rangle$$
$$\Rightarrow=\left\langle \phi_n|\psi \right\rangle\left\lvert \phi_n \right\rangle$$
So
$$\Rightarrow||\hat{\Pi}_n\left\lvert \psi \right\rangle||^2$$
$$\Rightarrow= ||\left\langle \phi_n|\psi \right\rangle\left\lvert \phi_n \right\rangle||^2$$
$$\Rightarrow= |\left\langle \phi_n|\psi \right\rangle|^2||\left\lvert \phi_n \right\rangle||^2$$
We know that the [[magnitude]] of the eigenstate $\left\lvert \phi_n \right\rangle$ is 1.

After: State collapses to
$$\left\lvert \psi' \right\rangle=\frac{1}{\sqrt{P_n}}\hat{\Pi}_n\left\lvert \psi \right\rangle$$.

The collapse is true only if this is an idealized measurement that is non-destructive.
This means that the measurement must not destroy the system (e.g., photon absorbed by detector). There’s no noise as well.
