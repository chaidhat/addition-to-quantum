# Hamiltonian Rotation Quirk

Any 2x2 Hermitian Hamiltonian can be decomposed into an identity plus a rotation generator part.
This means that every single-qubit Hamiltonian is a rotation. The Pauli basis spans all 2x2 Hermitian matrices.

$$H = \begin{pmatrix} g_0 + g_3 & g_1 - ig_2 \\ g_1 + ig_2 & g_0 - g_3 \end{pmatrix} \quad g_i \in \mathbb{R}$$

$$= g_0 I + g_1 X + g_2 Y + g_3 Z$$

$$= g_0 I + \vec{g}\cdot\vec{\sigma} \qquad \vec{g} = (g_1, g_2, g_3) = g\hat{n}$$

$$= g_0 I + g\,\hat{n}\cdot\vec{\sigma} \qquad \vec{\sigma} = (X, Y, Z) = (\sigma_x, \sigma_y, \sigma_z)$$

$$= g_0 I + \frac{2g}{\hbar}\,\hat{n}\cdot\vec{S}$$

Remarks

1.  If and only $B$ is Hermitian then $U=e^{iB}$ is unitary.

2.  Spin/angular momentum generates rotations

3.  Unitary $V$ is a dynamical symmetry of system if it commutes with time evolution
    $$[V,U(t)]=0 \Rightarrow[V,H(t)]=0$$

4.  Hermitian $A$ is a conserved quantity if $[A,H(t)]=0$. This also means $V(\theta)=e^{i\theta A}$ is a dynamical symmetry of the system. A conserved quantity generates dynamical symmetries.
