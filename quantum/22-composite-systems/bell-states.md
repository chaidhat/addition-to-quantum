# Bell States

For reference, Bell defined these as

$$
\begin{aligned}
        \left\lvert \Phi^+ \right\rangle & \triangleq \tfrac{1}{\sqrt{2}}\left(\left\lvert 00 \right\rangle + \left\lvert 11 \right\rangle\right) \\
        \left\lvert \Phi^- \right\rangle & \triangleq \tfrac{1}{\sqrt{2}}\left(\left\lvert 00 \right\rangle - \left\lvert 11 \right\rangle\right) \\
        \left\lvert \Psi^+ \right\rangle & \triangleq \tfrac{1}{\sqrt{2}}\left(\left\lvert 01 \right\rangle + \left\lvert 10 \right\rangle\right) \\
        \left\lvert \Psi^- \right\rangle & \triangleq \tfrac{1}{\sqrt{2}}\left(\left\lvert 01 \right\rangle - \left\lvert 10 \right\rangle\right)
    \end{aligned}
$$

See [[singlet]]

## Properties

1. [[orthonormality|Orthonormal]] [[basis-state|basis]] for $H_A\otimes H_B=\mathbb{C}^2\otimes \mathbb{C}^2$

$$
\ket{00} = \tfrac{1}{\sqrt{2}}\big(\ket{\Phi_+} + \ket{\Phi_-}\big), \quad \ket{11} = \tfrac{1}{\sqrt{2}}\big(\ket{\Phi_+} - \ket{\Phi_-}\big)
$$

$$
\ket{01} = \tfrac{1}{\sqrt{2}}\big(\ket{\Psi_+} + \ket{\Psi_-}\big), \quad \ket{10} = \tfrac{1}{\sqrt{2}}\big(\ket{\Psi_+} - \ket{\Psi_-}\big)
$$

2. Can be transformed into each other via local operations $U_A\otimes U_B$

$$

\sigma^X \otimes I \,\ket{\Phi_+} = I \otimes \sigma^X \,\ket{\Phi_+} = \ket{\Psi_+}
$$

$$
\sigma^Z \otimes I \,\ket{\Phi_+} = I \otimes \sigma^Z \,\ket{\Phi_+} = \ket{\Phi_-}
$$

3. Simultaneous [[eigenstates]] of $\sigma_A^X, \sigma_A^Y, \sigma_A^Z, \sigma_B^X, \sigma_B^Y,\sigma_B^Z$ 

$$
[\sigma^X_A,\ \sigma^Y_A] \neq 0 \quad \text{but} \quad [\sigma^X_A \sigma^X_B,\ \sigma^Y_A \sigma^Y_B] = 0
$$

4. Locally indistinguishable for all $M^{(A)}=M\otimes I$

$$
\bra{\Phi_\pm} M^{(A)} \ket{\Phi_\pm} = \bra{\Psi_\pm} M^{(A)} \ket{\Psi_\pm} = \tfrac{1}{2}\,\text{Tr}(M)
$$

$$
= 0 \quad \text{if } M \in \{\sigma^X, \sigma^Y, \sigma^Z\}
$$
