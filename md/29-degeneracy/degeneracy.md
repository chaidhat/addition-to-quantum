# Degeneracy

Two or more [[linear-independence|linear independent]] quantum states ([[eigenstates]]) share the same [[eigenvectorseigenvalues|eigenvalue]].
An energy level $E_n$ is degenerate if there exist multiple [[linear-independence|linearly independent]] [[eigenstates]] $\left\lvert \psi_1 \right\rangle, \left\lvert \psi_2 \right\rangle, \ldots, \left\lvert \psi_n \right\rangle$ which satisfy
$$\hat{H}\left\lvert \psi_i \right\rangle=E_n\left\lvert \psi_i \right\rangle\quad \forall i=1,2,\ldots,g$$
Where if $g=1$, the energy level is non-degenerate.
If $g>1$, the energy level is degenerate.
If something is degenerate, that implies there is no unique [[basis-states|basis]]. What you want to write down should be a [[projections|projection]] onto the [[subspaces]].

$$\hat{H}\triangleq\begin{pmatrix}
        E_0 &     & 0   \\
            & E_1 &     \\
        0   &     & E_2
    \end{pmatrix}
    \quad \left\lvert 0 \right\rangle\triangleq\begin{pmatrix}1 \\ 0 \\ 0\end{pmatrix}
    \quad \left\lvert 1a \right\rangle\triangleq\begin{pmatrix}0 \\ 1 \\ 0\end{pmatrix}
    \quad \left\lvert 1b \right\rangle\triangleq\begin{pmatrix}0 \\ 0 \\ 1\end{pmatrix}$$
$$\Rightarrow\hat{H}=E_0\left\lvert 0 \right\rangle\left\langle 0 \right\rvert+E_1\left\lvert 1a \right\rangle\left\langle 1a \right\rvert+E_2\left\lvert 1b \right\rangle\left\langle 1b \right\rvert$$
The states $\left\lvert 1a \right\rangle,\left\lvert 1b \right\rangle$ are degenerate if and only if $E_1=E_2$. If $E_0=E_1, E_1\neq E_2$ then $\left\lvert 0 \right\rangle$ is degenerate with $\left\lvert 1a \right\rangle$.

This just means that you can’t detect the difference between states given only the energy/[[eigenvectorseigenvalues|eigenvalue]].

Remember the [[eigenvectorseigenvalues|eigenvalue]] is observed as energy if the [[operators|operator]] is the [[schruxf6dingers-equation-hamiltonian|Hamiltonian]].

This means the Hamiltonian alone is not enough to determine the state.

This is because if E is degenerate then

$$H\left\lvert \psi_1 \right\rangle= E\left\lvert \psi_1 \right\rangle$$
$$H\left\lvert \psi_2 \right\rangle= E\left\lvert \psi_2 \right\rangle$$

Now just finding $E$ doesn’t mean we can distinguish the states.

We need another operator $\hat{A}$ which commutes with $\hat{H}$ to distinguish the states. Note that just because $\hat{A}$ commutes with $\hat{H}$ doesn’t mean we can distinguish the states.
$$A\left\lvert \psi_1 \right\rangle= a_1\left\lvert \psi_1 \right\rangle$$
$$A\left\lvert \psi_2 \right\rangle= a_2\left\lvert \psi_2 \right\rangle$$

And if $a_1\neq a_2$ then we can distinguish the states.

BUT if $[\hat{A},\hat{H}]\neq0$ then this doesn’t always hold true for the entire [[hilbert-spaces|Hilbert Space]].

This is because if
$$\hat{H}\left\lvert \psi \right\rangle= E\left\lvert \psi \right\rangle$$
$$\Rightarrow\hat{A}\hat{H}\left\lvert \psi \right\rangle= \hat{A}E\left\lvert \psi \right\rangle$$
$$\Rightarrow(\hat{H}\hat{A}-[\hat{H},\hat{A}])\left\lvert \psi \right\rangle = E\hat{A}\left\lvert \psi \right\rangle$$
$$\Rightarrow\hat{H}\hat{A}\left\lvert \psi \right\rangle - [\hat{H},\hat{A}]\left\lvert \psi \right\rangle= E\hat{A}\left\lvert \psi \right\rangle$$
If $[\hat{H},\hat{A}]=0$ (i.e., H and A commute) then

$$\Rightarrow\hat{H}\hat{A}\left\lvert \psi \right\rangle = E\hat{A}\left\lvert \psi \right\rangle$$
This means that $\hat{A}\left\lvert \psi \right\rangle$ is in the $E$-[[eigenspaces|eigenspace]] of $\hat{H}$. Another way to say this is that $\hat{A}\left\lvert \psi \right\rangle$ is in the set of [[eigenvectorseigenvalues|eigenvectors]] for H that share [[eigenvectorseigenvalues|eigenvalue]] E.

This means that $\hat{A}$ maps a vector in the $E$-eigenspace of $\hat{H}$ to another vector in the $E$-eigenspace of $\hat{H}$.
