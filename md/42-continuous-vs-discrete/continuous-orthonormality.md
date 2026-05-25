# Continuous Orthonormality
For a discrete basis: (using [[kronecker-delta]])
$$
\braket{x|x'}\equiv \braket{x_k|x_{k'}}
$$
$$
=\frac{\braket{k|k'}}{\Delta x}=\delta_{kk'}\frac{1}{\Delta x}=\begin{cases}0& if\quad x\neq x'\quad k\neq k'\\ 1/\Delta x\quad& if \quad x=x'\quad k=k\end{cases}
$$
For a [[non-denumerable-basis|continuous]] basis: (using [[dirac-delta-function]])
$$
\int\braket{x|x'}dx\equiv \sum_{x_k=-L}^L \braket{x|x_{k'}}\Delta x
$$
$$
=\sum_{k=-N}^N\braket{k|k'}=\delta(k-k')=1
$$
