# Inner Product II

building on top of what we said about the [<span class="underline">inner product</span>](#inner-product),

an inner product is any

$$\begin{gather*}
    \langle u|v\rangle
\end{gather*}$$

which is

1.  [<span class="underline">conjugate</span>](#conjugate) symmetric

$$\begin{gather*}
    \left\langle u|v \right\rangle^*=\left\langle v|u \right\rangle
\end{gather*}$$

Example

let

$$\begin{gather*}
    \left\lvert \psi \right\rangle=\begin{bmatrix}a\\b\end{bmatrix}\quad \Rightarrow\left\langle \psi \right\rvert=\begin{bmatrix}a^* & b^*\end{bmatrix}
    \\
    \left\lvert \phi \right\rangle=\begin{bmatrix}c\\d\end{bmatrix}\Rightarrow\left\langle \phi \right\rvert=\begin{bmatrix}c^* & d^*\end{bmatrix}
\end{gather*}$$

so

$$\begin{gather*}
    (\left\langle \psi|\phi \right\rangle)^*=\left(\begin{bmatrix}a^* & b^*\end{bmatrix}\begin{bmatrix}c\\d\end{bmatrix}\right)^*=(a^*c+b^*d)^*=ac^*+bd^*=c^*a+d^*b\\
    =\left\langle \phi|\psi \right\rangle
\end{gather*}$$

so $\phi,\psi$ are conjugate symmetric

1.  linear

$$\begin{gather*}
    \langle u|(a|v\rangle + b|w\rangle) = a\langle u|v\rangle + b\langle u|w\rangle
\end{gather*}$$

1.  positive definite

$$\begin{gather*}
    \forall |u\rangle \neq 0, \quad \langle u|u\rangle > 0
\end{gather*}$$
