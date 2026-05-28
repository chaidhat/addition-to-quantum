# Inner product

Inner product of [[ket-state|states]] $\left\lvert u \right\rangle$ and $\left\lvert v \right\rangle$ is defined as

$$
\begin{gather*}
    \left\langle u \right\rvert\cdot \left\lvert v \right\rangle=u_1^*v_1+u_2^*v_2+...+u_n^*v_n
\end{gather*}
$$

(if the entries are [[standard-number-systems|real]] numbers, the [[conjugate|conjugates]] do nothing and this
reduces to the usual dot product.)

It is a [[projection]] of $\ket{\psi}$ onto $\ket{x}$

Properties

1.  [[conjugate]] [[symmetric-matrix|symmetric]]

$$
\begin{gather*}
    \left\langle u|v \right\rangle^*=\left\langle v|u \right\rangle
\end{gather*}
$$

Note

$$
\braket{n|m}=\delta_{nm}
$$

Where $\delta_{nm}$ is the [[kronecker-delta]]

Example

let

$$
\begin{gather*}
    \left\lvert \psi \right\rangle=\begin{bmatrix}a\\b\end{bmatrix}\quad \Rightarrow\left\langle \psi \right\rvert=\begin{bmatrix}a^* & b^*\end{bmatrix}
    \\
    \left\lvert \phi \right\rangle=\begin{bmatrix}c\\d\end{bmatrix}\Rightarrow\left\langle \phi \right\rvert=\begin{bmatrix}c^* & d^*\end{bmatrix}
\end{gather*}
$$

so

$$
\begin{gather*}
    (\left\langle \psi|\phi \right\rangle)^*=\left(\begin{bmatrix}a^* & b^*\end{bmatrix}\begin{bmatrix}c\\d\end{bmatrix}\right)^*=(a^*c+b^*d)^*=ac^*+bd^*=c^*a+d^*b\\
    =\left\langle \phi|\psi \right\rangle
\end{gather*}
$$

so $\phi,\psi$ are conjugate symmetric

1.  linear

$$
\begin{gather*}
    \langle u|(a|v\rangle + b|w\rangle) = a\langle u|v\rangle + b\langle u|w\rangle
\end{gather*}
$$

1.  positive [[definite]]

$$
\begin{gather*}
    \forall |u\rangle \neq 0, \quad \langle u|u\rangle > 0
\end{gather*}
$$
