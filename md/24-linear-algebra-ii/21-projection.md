# Projection

The projection of $v$ onto a
[<span class="underline">vector</span>](#vectors)
$u$ is

$$\begin{gather*}
    \Pi_u(v)=\frac{\left\langle v|u \right\rangle}{\left\langle u|u \right\rangle}u
\end{gather*}$$

Example

$$\begin{gather*}
    \left\lvert \psi \right\rangle=\begin{bmatrix}a\\b\end{bmatrix}\quad \Rightarrow\left\langle \psi \right\rvert=\begin{bmatrix}a^* & b^*\end{bmatrix}
    \\
    \left\lvert \phi \right\rangle=\begin{bmatrix}c\\d\end{bmatrix}\Rightarrow\left\langle \phi \right\rvert=\begin{bmatrix}c^* & d^*\end{bmatrix}
\end{gather*}$$

$$\begin{gather*}
    \Pi_\psi(\phi)=\frac{\begin{bmatrix}c^* & d^*\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}}{\begin{bmatrix}a^* & b^*\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}}\begin{bmatrix}a\\b\end{bmatrix}\\
    =\frac{c^*a+d^*b}{a^*a+b^*b}\begin{bmatrix}a\\b\end{bmatrix}
\end{gather*}$$

This is similar to the dot product, but it gives a
[<span class="underline">vector</span>](#vectors)
