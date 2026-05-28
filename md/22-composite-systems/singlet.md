# Singlet
Recall [[bell-states]]. Only $\ket{\Psi^-}$ is called a singlet. The rest are triplets. It is the only one which has a total spin of 0. The rest all have spin of 1

Note that
$$
\boxed{\sigma^Z_A \sigma^Z_B\ket{\Psi^-} = -\ket{\Psi^-}}
$$
$$
\boxed{\sigma^X_A \sigma^X_B\ket{\Psi^-} = -\ket{\Psi^-}}
$$
This is because if we measure on Z
$$
\sigma^Z\ket{\uparrow} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} = +\ket{\uparrow}
$$
+1 is an [[eigenvectoreigenvalue|eigenvalue]] of $\sigma^Z\ket{\uparrow}$ 
-1 is an eigenvalue of $\sigma^Z\ket{\downarrow}$ 
acting on 
$$
\sigma^Z_A \sigma^Z_B \ket{\uparrow\downarrow} = -\ket{\uparrow\downarrow}
$$
$$
\sigma^Z_A \sigma^Z_B \ket{\downarrow\uparrow} = -\ket{\downarrow\uparrow}
$$
acting on the singlet
$$
\sigma^Z_A \sigma^Z_B \ket{\Psi^-} = \frac{1}{\sqrt{2}}(-\ket{\uparrow \downarrow}+\ket{\downarrow \uparrow}) =-\ket{\Psi^-}
$$
combining we get
$$
\sigma^X_A \sigma^Z_B\ket{\Psi^-} = -\ket{\Phi_+}
$$
$$
\sigma^Z_A \sigma^X_B\ket{\Psi^-} = +\ket{\Phi_+}
$$
Getting the EV
$$
\langle\Psi^-|\sigma^Z_A \sigma^Z_B|\Psi^-\rangle = -1, \quad \langle\Psi^-|\sigma^X_A \sigma^X_B|\Psi^-\rangle = -1
$$
$$
\boxed{\mathbb{E}\left[\sigma^Z_A \sigma^Z_B\right] = -1\quad
\mathbb{E}\left[\sigma^X_A \sigma^X_B\right]= -1} 
$$
These are perfect anti-correlations

## Cross terms
We can also look at the cross terms
$$
\langle\Psi^-|\sigma^X_A \sigma^Z_B|\Psi^-\rangle = 0, \quad \langle\Psi^-|\sigma^Z_A \sigma^X_B|\Psi^-\rangle = 0
$$
$$
\boxed{\mathbb{E}[\sigma^X_A \sigma^Z_B] = 0, \quad \mathbb{E}[\sigma^Z_A \sigma^X_B]= 0}
$$
Cross terms vanish
