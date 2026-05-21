# Anti-Hermitian Operator

An [[operators|operator]] is anti-hermitian if and only if

$$\begin{gather*}
    \hat{B}^+=-\hat{B}
\end{gather*}$$

note that if you do

$$\begin{gather*}
    \hat{A}=i\hat{B}
\end{gather*}$$

then $\hat{A}$ is [[hermitian-operators|Hermitian]]

Any operator $\hat{T}$ can be written as linear combination of
[[hermitian-operators|Hermitian]] and anti-Hermitian operator.

$$\begin{gather*}
    \hat{T}=\hat{A}+i\hat{B}\\
    \hat{A}=\frac{\hat{T}+\hat{T}^+}{2}\\
    \hat{B}=\frac{\hat{T}-\hat{T}^+}{2i}
\end{gather*}$$

Note that this is true for [[complex-number-decomposition|regular complex numbers]]
