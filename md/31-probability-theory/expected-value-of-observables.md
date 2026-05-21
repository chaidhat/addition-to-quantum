# Expected Value of an Observable

To determine the mean (EV) of an [[operators|operator]] $\hat{A}$, we must know the state $\left\lvert \psi \right\rangle$ you’re in.
$$\begin{gather*}
    \mathbb{E}(A)=\sum_nA_nP(n)\\
    =\sum A_n|\left\langle n|\psi \right\rangle|^2\\
    =\sum A_n\left\langle \psi|n \right\rangle\left\langle n|\psi \right\rangle\\
    =\left\langle \psi \right\rvert\sum_n A_n\left\lvert n \right\rangle\left\langle n \right\rvert\left\lvert \psi \right\rangle\\
    =\left\langle \psi \right\rvert\hat{A}\left\lvert \psi \right\rangle\\
    \triangleq\left\langle \hat{A} \right\rangle
\end{gather*}$$

Another convientn reprsentation is

$$\begin{gather*}
    \hat{\rho}\triangleq\left\lvert \psi \right\rangle\left\langle \psi \right\rvert\\
    \Rightarrow\left\langle \hat{A} \right\rangle=tr(\hat{\rho}\hat{A})\\
    =tr(\left\lvert \psi \right\rangle\left\langle \psi \right\rvert\hat{A})\\
    tr(\left\langle \psi \right\rvert\hat{A}\left\lvert \psi \right\rangle)
\end{gather*}$$

where $tr$ is [[traces|trace]]
