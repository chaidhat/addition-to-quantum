# Operator

Let $\hat{T}$ be an operator.

An operator is a
[<span class="underline">function</span>](#functions)
where

$$\begin{gather*}
    \hat{T}:V\rightarrow V
\end{gather*}$$

where V are the set of all possible [<span class="underline">vectors</span>](#vectors) in a [<span class="underline">Hilbert space</span>](#hilbert-spaces).

In quantum mechanics, all observed operators are linear which means

$$\begin{gather*}
    \hat{T}(a\left\lvert u \right\rangle+b\left\lvert v \right\rangle)=a\hat{T}(\left\lvert u \right\rangle)+b\hat{T}(\left\lvert v \right\rangle)
\end{gather*}$$

If we were to observe a non-linear operator, then that would cause wacky things.

also they can be represented as [<span class="underline">matrices</span>](#matrices)

$$\begin{gather*}
    \hat{T}\left\lvert \psi \right\rangle=\sum_{m}\psi_m'\left\lvert m \right\rangle
\end{gather*}$$

where

$$\begin{gather*}
    \begin{bmatrix}
        \psi_1' \\
        \psi_2' \\
        \vdots  \\
        \psi_d'
    \end{bmatrix}=
    \begin{bmatrix}
        T_{11} & T_{12} & \cdots & T_{1d} \\
        T_{21} & T_{22} & \cdots & T_{2d} \\
        \vdots                            \\
        T_{d1} & T_{d2} & \cdots & T_{dd}
    \end{bmatrix}\begin{bmatrix}\psi_1 \\ \psi_2 \\ \vdots \\\psi_d\end{bmatrix}
\end{gather*}$$

where $\left\lvert m \right\rangle$ is the basis for $\left\lvert \psi \right\rangle$

Operators must be square.

$$\begin{gather*}
    a\left\lvert v \right\rangle\in V\quad ;\quad a\in \mathbb{F},\left\lvert v \right\rangle\in V
\end{gather*}$$
