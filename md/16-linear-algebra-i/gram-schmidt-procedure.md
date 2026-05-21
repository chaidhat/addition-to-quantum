# Gram-Schmidt Procedure

If you have
[[linear-independence|linearly
independent]] vectors and want to convert them into an
[[orthonormality|orthonormal]]
set, you can follow the Gram-Schmidt procedure.

Given $v_1,v_2,…,v_n$ as
[[linear-independence|LI]]
[[vectors]],
then $u_1, u_2, …, u_n$ can be built using

$$\begin{gather*}
    u_k=v_k-\sum_{i=1}^{k-1}\Pi_{u_i}(v_k)
\end{gather*}$$

This makes $u$ an
[[orthogonality|orthogonal]]
[[vectors|vector]]

Then you
[normalize](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21)
$u$ to get a
[[orthonormality|orthonormal]]
[[vectors|vector]].
You do this by multiplying the
[[magnitude]]
of the
[[vectors|vector]].
