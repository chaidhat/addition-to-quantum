# Pauli Matrices

Three matrices which are defined as

$$\begin{gather*}
    \sigma^0=\sigma_0=I_2=\begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}\\
    \hat{\sigma}_x=\sigma^1=\sigma_1=\begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix}\\
    \hat{\sigma}_y=\sigma^2=\sigma_2=\begin{pmatrix}
        0 & -i \\
        i & 0
    \end{pmatrix}\\
    \hat{\sigma}_z=\sigma^3=\sigma_3=\begin{pmatrix}
        1 & 0  \\
        0 & -1
    \end{pmatrix}
\end{gather*}$$

Properties

- spacing

$$\begin{gather*}
    \hat{\sigma}^2_i=I_2\quad \forall \quad i\in\{x,y,z\}
\end{gather*}$$

- commutation

note that

The symbol $\varepsilon_{ijk}$ is the Levi-Civita symbol, an
antisymmetric tensor that encodes signs based on the order of its
indices.

- in 3D

$$\begin{gather*}
    \varepsilon_{ijk}=\begin{cases}
        +1\quad \text{if $(i,j,k)$ is an even permutation of (1,2,3)} \\
        -1\quad \text{if $(i,j,k)$ is an odd permutation of (1,2,3)}  \\
        0\quad\text{if any index repeats}
    \end{cases}
\end{gather*}$$

- in 2D (only two indices, written $\varepsilon_{ij}$)

$$\begin{gather*}
    \varepsilon_{ij}=\begin{pmatrix}0 & 1 \\ -1 & 0\end{pmatrix}
\end{gather*}$$

$$\begin{gather*}
    [\sigma_i,\sigma_j]=2i\varepsilon_{ijk}\sigma_k
\end{gather*}$$

where an “even” permutation is (1,2,3), (2,3,1), (3,1,2) and an
“odd” is (2,1,3), (1,3,2), (3,2,1)

- anti commutation

Note that the anticommutator is

$$\begin{gather*}
    \{A,B\}=AB+BA
\end{gather*}$$

$$\begin{gather*}
    \{\sigma_i,\sigma_j\}=2\delta_{ij}I_2
\end{gather*}$$

- completeness

$$\begin{gather*}
    \sigma_0=I_2=\begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}
\end{gather*}$$

the set $\{\sigma_0,\sigma_x,\sigma_y,\sigma_z\}$ spans all 2x2
complex matrices

$$\begin{gather*}
    \{I,X,Y,Z\}\quad\text{form a basiss for operator }L(\mathbb{C})^2
\end{gather*}$$

where

forms a basis for all 2x2 complex matrices. Any 2x2 matrix

$$\begin{gather*}
    M=\sum_{\mu=0}^3c_\mu\sigma_\mu
\end{gather*}$$

- whatever this is

$$\begin{gather*}
    \vec{\sigma}=(X,Y,Z)\quad\text{are Hermitian}\\
    \sigma^1=\sigma^x=X\\
    \sigma^2=\sigma^y=Y\\
    \sigma^3=\sigma^z=Z\\
    X^2+Y^2+Z^2=I\\
    tr(X)=tr(Y)=tr(Z)=0\\
    XY=iZ, YZ=iX, ZX=iY\\
    [X, Y] = i\hbar Z, \quad [Y, Z] = i\hbar X, \quad [Z, X] = i\hbar Y\\
    YX=(XY)^+=(iZ)^+=-iZ
\end{gather*}$$

and

$$\begin{gather*}
    \hat{A}=a_0\sigma_0+a_1\sigma_x+a_2\sigma_y+a_3\sigma_z\quad a_i\in \mathbb{C}
\end{gather*}$$

$\hat{A}\cdot\hat{B}$ can be expanded as

$$\begin{gather*}
    \hat{A}\hat{B}=\sum_{i=0}^3c_i\sigma^i
\end{gather*}$$

If $c_i\in\mathbb{R}$, then $\hat{A}$ is [<span class="underline">Hermitian</span>](#hermitian-operators)
